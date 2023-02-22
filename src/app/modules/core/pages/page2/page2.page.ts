import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoreRoutes } from "src/app/constants/routes.constant";
import { AuthenticationService } from "../../services/authentication.service";
import { BoardTypesService } from "../../services/board-types.service";
import { LayoutService } from "../../services/layout.service";
import { BasePage } from "../base.page";

@Component({
    selector: "app-page2",
    templateUrl: "./page2.page.html",
    styleUrls: ["./page2.page.less"]
})
export class Page2Page extends BasePage {

    constructor(
        route: ActivatedRoute,
        private router: Router,
        layoutService: LayoutService,
        authenticationService: AuthenticationService,
        boardTypesService: BoardTypesService
    ) {
        super(route, layoutService, authenticationService, CoreRoutes.page2.title);

        if(boardTypesService.isReady) {
            console.log(boardTypesService.boardTypes.length);
        }
        else {
            this.subscriptions.push(
                boardTypesService.onReady$.subscribe(() => {
                    console.log(boardTypesService.boardTypes.length);
                })
            );
        }
    }

    public onHomeButtonClick(): void {
        this.router.navigate([CoreRoutes.page1.route, 444]);
    }

    protected initialize(): void {
        // still nothing here
    }
}
