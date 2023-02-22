export interface IMenuItem {
    route: string;
    title: string;
    showInMenu: boolean;
}

export class CoreRoutes {
    public static page1: IMenuItem = {
        route: "page1",
        title: "Page 1",
        showInMenu: true
    };

    public static page1WithParam1: IMenuItem = {
        route: "page1/:id",
        title: "Page 1",
        showInMenu: false
    };

    public static page2: IMenuItem = {
        route: "page2",
        title: "Page 2",
        showInMenu: true
    };

    public static boxSizing: IMenuItem = {
        route: "box-sizing",
        title: "Box sizing",
        showInMenu: true
    };

    public static unhandledError: IMenuItem = {
        route: "unhandled-error",
        title: "Unhandled error",
        showInMenu: true
    };

    public static rxjs: IMenuItem = {
        route: "rxjs",
        title: "RxJs",
        showInMenu: true
    };

    public static login: IMenuItem = {
        route: "login",
        title: "Login page",
        showInMenu: false
    };
}

export class ArticlesRoutes {
    public static articleList: IMenuItem = {
        route: "articles/list",
        title: "Articles list",
        showInMenu: true
    };
}