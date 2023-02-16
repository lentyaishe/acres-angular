import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ArticlesRoutes, CoreRoutes, IMenuItem } from "src/app/constants/routes.constant";
import * as _ from "underscore";

@Component({
    selector: "aac-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.less"]
})
export class MenuComponent implements OnInit {
    @Input() routesClass: CoreRoutes | ArticlesRoutes | undefined = undefined;

    public menuItems: IMenuItem[] = [];
    
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): void {
        for (const key in this.routesClass) {
            const menuItem: IMenuItem = (this.routesClass as any)[key];
            if (menuItem.showInMenu) {
                this.menuItems.push(menuItem);
            }
        }
    }

    public onMenuItemClick(route: string): void {
        this.router.navigate([route]);
    }
}
