import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Endpoints } from "src/app/constants/endpoints.constants";
import { CoreRoutes } from "src/app/constants/routes.constant";
import { AuthenticationService } from "../../services/authentication.service";
import { LayoutService } from "../../services/layout.service";
import { BasePage } from "../base.page";
import * as _ from "underscore";

interface IBoardTypesResponse {
    types: IServerBoardType[];
}

interface IServerBoardType {
    id: number;
    type: string;
}

interface IBoardType {
    id: number;
    type: string;
}

@Component({
    selector: "aac-page1",
    templateUrl: "./page1.page.html",
    styleUrls: ["./page1.page.less"]
})
export class Page1Page extends BasePage {
    public boardTypes: IBoardType[] = [];

    constructor(
        route: ActivatedRoute,
        layoutService: LayoutService,
        authenticationService: AuthenticationService
    ) {
        super(route, layoutService, authenticationService, CoreRoutes.page1.title);
    }

    protected initialize(): void {
        console.log(this.routeParams.id);

        this.authenticationService.get<IBoardTypesResponse>(Endpoints.BoardTypes)
            .then((response: IBoardTypesResponse) => {
                this.boardTypes = _.map(response.types, (serverBoardType: IServerBoardType) => this.toLocalBoardType(serverBoardType));
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    private toLocalBoardType(serverBoardType: IServerBoardType): IBoardType {
        return {
            id: serverBoardType.id,
            type: serverBoardType.type
        };
    }
}
