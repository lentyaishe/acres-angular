import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoreRoutes } from "src/app/constants/routes.constant";
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
        layoutService: LayoutService
    ) {
        super(route, layoutService, CoreRoutes.page2.title);
    }

    public onHomeButtonClick(): void {
        this.router.navigate([CoreRoutes.page1.route, 444]);
    }

    protected initialize(): void {
        // still nothing here
    }
}
