import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OptionChooserComponent } from "./components/option-chooser/option-chooser.component";
import { Page1Page } from "./pages/page1/page1.page";
import { Page2Page } from "./pages/page2/page2.page";
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from "./components/menu/menu.component";
import { CoreRoutes } from "src/app/constants/routes.constant";
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { PageNotFoundPage } from "./pages/pagenotfound/page-not-found.page";

const routes: Routes = [
    { path: CoreRoutes.page1.route, component: Page1Page },
    { path: CoreRoutes.page1WithParam1.route, component: Page1Page },
    { path: CoreRoutes.page2.route, component: Page2Page },
    { path: "", redirectTo: CoreRoutes.page1.route, pathMatch: "full" },
    { path: "**", component: PageNotFoundPage }
];

@NgModule({
    declarations: [
        OptionChooserComponent,
        Page1Page,
        Page2Page,
        PageNotFoundPage,
        MenuComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        MatChipsModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        OptionChooserComponent,
        MenuComponent
    ]
})
export class CoreModule { }
