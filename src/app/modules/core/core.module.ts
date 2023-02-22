import { FormsModule } from "@angular/forms";
import { ErrorHandler, NgModule } from "@angular/core";
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
import { MatInputModule } from "@angular/material/input";
import { PageNotFoundPage } from "./pages/pagenotfound/page-not-found.page";
import { LoginPage } from "./pages/login/login.page";
import { HttpClientModule } from "@angular/common/http";
import { AuthenticationGuard } from "./guards/authentication.guard";
import { BoxSizingPage } from "./pages/box-sizing/box-sizing.page";
import { UnhandledErrorPage } from "./pages/unhandled-error/unhandled-error.page";
import { RxjsPage } from "./pages/rxjs/rxjs.page";
import { BoardTypesReactiveCachedPage } from "./pages/board-types-reactive-cached/board-types-reactive-cached.page";
import { BoardTypesReactivePage } from "./pages/board-types-reactive/board-types-reactive.page";
import { BoardTypesReactiveSearchPage } from "./pages/board-types-reactive-search/board-types-reactive-search.page";

const routes: Routes = [
    { path: CoreRoutes.page1.route, component: Page1Page, canActivate: [AuthenticationGuard] },
    { path: CoreRoutes.page1WithParam1.route, component: Page1Page, canActivate: [AuthenticationGuard] },
    { path: CoreRoutes.page2.route, component: Page2Page, canActivate: [AuthenticationGuard] },
    { path: CoreRoutes.boxSizing.route, component: BoxSizingPage },
    { path: CoreRoutes.unhandledError.route, component: UnhandledErrorPage },
    { path: CoreRoutes.rxjs.route, component: RxjsPage },
    { path: CoreRoutes.boardTypesReactiveCached.route, component: BoardTypesReactiveCachedPage, canActivate: [AuthenticationGuard]   },
    { path: CoreRoutes.boardTypesReactive.route, component: BoardTypesReactivePage, canActivate: [AuthenticationGuard]   },
    { path: CoreRoutes.boardTypesReactiveWithSesrch.route, component: BoardTypesReactiveSearchPage, canActivate: [AuthenticationGuard]   },
    { path: CoreRoutes.login.route, component: LoginPage },
    { path: "", redirectTo: CoreRoutes.page1.route, pathMatch: "full" },
    { path: "**", component: PageNotFoundPage }
];

@NgModule({
    declarations: [
        OptionChooserComponent,
        Page1Page,
        Page2Page,
        PageNotFoundPage,
        MenuComponent,
        LoginPage,
        BoxSizingPage,
        UnhandledErrorPage,
        RxjsPage,
        BoardTypesReactiveCachedPage,
        BoardTypesReactivePage,
        BoardTypesReactiveSearchPage
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        MatChipsModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        HttpClientModule
    ],
    exports: [
        OptionChooserComponent,
        MenuComponent
    ],
    providers: [
        AuthenticationGuard
    ]
})
export class CoreModule { }
