import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CoreRoutes } from "src/app/constants/routes.constant";
import { AuthenticationService } from "../../services/authentication.service";

interface ILoginInfo {
    username: string;
    password: string;
}

@Component({
    selector: "app-login",
    templateUrl: "./login.page.html",
    styleUrls: ["./login.page.less"]
})
export class LoginPage {
    public loginInfo: ILoginInfo = {
        username: "lentyai",
        password: "12345678"
    };

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) {}

    public onLoginClick(): void {
        this.authenticationService.login(this.loginInfo.username, this.loginInfo.password)
            .then(() => {
                console.log("Successfull login");

                this.router.navigate([CoreRoutes.page2.route]);

            })
            .catch((error) => {
                console.warn(error);
            });
    }

    public onClearClick(): void {
        this.loginInfo = {
            username: "",
            password: ""
        };
    }
}
