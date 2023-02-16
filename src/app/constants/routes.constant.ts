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
}

export class ArticlesRoutes {
    public static articleList: IMenuItem = {
        route: "articles/list",
        title: "Articles list",
        showInMenu: true
    };
}