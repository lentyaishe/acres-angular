import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs";
import { CoreRoutes } from "src/app/constants/routes.constant";
import { IBoardType } from "../../models/board-type";
import { AuthenticationService } from "../../services/authentication.service";
import { BoardTypesService } from "../../services/board-types.service";
import { LayoutService } from "../../services/layout.service";
import { BasePage } from "../base.page";

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
        authenticationService: AuthenticationService,
        boardTypesService: BoardTypesService
    ) {
        super(route, layoutService, authenticationService, CoreRoutes.page1.title);

        if(boardTypesService.isReady) {
            this.boardTypes = boardTypesService.boardTypes;
        }
        else {
            boardTypesService.onReady$
            .pipe(
                take(1) // ensures the Observable is unsubscribed after the first next() on its Subject
            )
            .subscribe(() => {
                this.boardTypes = boardTypesService.boardTypes;
            });
        }
    }

    protected initialize(): void {
        console.log(this.routeParams.id);
    }
}
