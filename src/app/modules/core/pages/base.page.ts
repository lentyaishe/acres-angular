import { Directive, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { RouteParams } from "../models/route-params";
import { AuthenticationService } from "../services/authentication.service";
import { LayoutService } from "../services/layout.service";

enum ParameterType {
    Number
}

@Directive()
export abstract class BasePage implements OnDestroy {
    protected routeParams: RouteParams = {
        id: null
    };

    protected subscriptions: Subscription[] = [];

    constructor(
        route: ActivatedRoute,
        layoutService: LayoutService,
        protected authenticationService: AuthenticationService,
        title: string
    ) {
        layoutService.headerTitle = title;

        route.params.subscribe((params: Params) => {
            this.setRouteParamByName("id", ParameterType.Number, params);

            this.initialize();
        });
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
    }

    protected abstract initialize(): void;

    private setRouteParamByName(name: string, type: ParameterType, params: Params): void {
        if (params[name]) {
            switch(type) {
                case ParameterType.Number:
                    (this.routeParams as any)[name] = Number((params[name]));
                    break;
                default:
                    console.error("Type unsupported: ", type);
            }
        }
    }
}