export class Endpoints {
    private static _baseUri: string = "http://localhost:6060";

    public static Login: string = `${this._baseUri}/auth/login`;

    public static BoardTypes: string = `${this._baseUri}/general/board-types`;
}