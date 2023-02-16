import { Injectable } from "@angular/core";

interface ILayoutService {
    headerTitle: string;
}

@Injectable({
    providedIn: "root"
})
export class LayoutService implements ILayoutService {
    private _headerTitle: string = "Welcome to my cool system";

    constructor() { }

    public get headerTitle(): string {
        return this._headerTitle;
    }

    public set headerTitle(value: string) {
        this._headerTitle = value;
    }
}
