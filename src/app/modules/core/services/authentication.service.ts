import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, EMPTY } from "rxjs";
import { Endpoints } from "src/app/constants/endpoints.constants";

interface IHttpOptions {
    headers: { [header: string]: string | string[]; };
}

interface ILoginRequest {
    login: string;
    password: string;
}

interface ILoginResponse {
    token: string;
}

interface IAuthenticationService {
    isAuthenticated: boolean;

    login(username: string, password: string): Promise<void>;
    logout(): void;

    get<T>(url: string): Promise<T>;
    post<TRequest, TResponse>(url: string, body: TRequest): Promise<TResponse>;
}

@Injectable({
    providedIn: "root"
})
export class AuthenticationService implements IAuthenticationService {
    private _token: string = "";

    constructor(
        private httpClient: HttpClient
    ) { }

    public get isAuthenticated(): boolean {
        return !!this._token;
    }

    public login(username: string, password: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const request: ILoginRequest = {
                login: username,
                password: password
            };

            // send request to server and get the token
            this.httpClient.post<ILoginResponse>(Endpoints.Login, request).pipe(
                catchError((error: any, caught: Observable<ILoginResponse>) => {
                    reject(error);
                    return EMPTY;
                })
            )
                .subscribe((response: ILoginResponse) => {
                    this._token = response.token;
                    resolve();
                });
        });
    }

    public logout(): void {
        this._token = "";
    }

    public get<T>(url: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            if (this._token) {
                this.httpClient.get<T>(url, this.getHttpAuthenticatedHeaders()).pipe(
                    catchError((error: any, caught: Observable<T>) => {
                        reject(error);
                        return EMPTY;
                    })
                )
                    .subscribe((response: T) => {
                        resolve(response);
                    });
            }
            else {
                reject("Unauthorized");
            }
        });
    }

    public post<TRequest, TResponse>(url: string, body: TRequest): Promise<TResponse> {
        return new Promise<TResponse>((resolve, reject) => {
            if (this._token) {
                this.httpClient.post<TResponse>(url, body, this.getHttpAuthenticatedHeaders()).pipe(
                    catchError((error: any, caught: Observable<TResponse>) => {
                        reject(error);
                        return EMPTY;
                    })
                )
                    .subscribe((response: TResponse) => {
                        resolve(response);
                    });
            }
            else {
                reject("Unauthorized");
            }
        });
    }

    private getHttpAuthenticatedHeaders(): IHttpOptions {
        return {
            headers: {
                ["Authorization"]: `Bearer ${this._token}`
            }
        };
    }
}
