import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { CoreRoutes } from "src/app/constants/routes.constant";
import { LayoutService } from "../../services/layout.service";
import { BasePage } from "../base.page";

@Component({
    selector: "aac-page1",
    templateUrl: "./page1.page.html",
    styleUrls: ["./page1.page.less"]
})
export class Page1Page extends BasePage {

    constructor(
        route: ActivatedRoute,
        layoutService: LayoutService
    ) {
        super(route, layoutService, CoreRoutes.page1.title);
    }

    protected initialize(): void {
        console.log(this.routeParams.id);
    }
}
