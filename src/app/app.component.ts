import { ISelectableOption } from './modules/core/models/selectable-option';
import { Component } from "@angular/core";
import { Paragraph } from "./modules/articles/models/paragraph";
import { LocalStorageService } from "./modules/core/services/local-storage.service";
import { CoreRoutes } from './constants/routes.constant';
import { LayoutService } from './modules/core/services/layout.service';
import { AuthenticationService } from './modules/core/services/authentication.service';
import { Router } from '@angular/router';

interface ArticleBase {
    id: number;
    isRead: boolean;
}

interface Article extends ArticleBase {
    date: Date;
    title: string;
    subTitle: string;
    paragraphs: Paragraph[];
}

@Component({
    selector: "aac-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"]
})
export class AppComponent {
    public CoreRoutes = CoreRoutes;

    public articles: Article[] = [];

    public optionsSet1: ISelectableOption<number>[] = [];
    public optionsSet2: ISelectableOption<ArticleBase>[] = [];

    public selectedOption1: number[] | number | null = [1, 2];
    public selectedOption2: ArticleBase[] | ArticleBase | null = [{
        id: 1,
        isRead: true
    }, {
        id: 3,
        isRead: true
    }];

    constructor(
        private router: Router,
        private localStorageService: LocalStorageService,
        public layoutService: LayoutService,
        public authenticationService: AuthenticationService
    ) {
        this.articles.push({
            id: 1,
            date: new Date(),
            title: "Acres course",
            isRead: false,
            subTitle: "The article about the course",
            paragraphs: [
                {
                    title: "Lesson 1",
                    body: "HTML / CSS",
                    isRemote: true
                }, {
                    title: "Lesson 2",
                    body: "Typescript",
                    isRemote: false
                }
            ]
        });

        this.optionsSet1.push({
            title: "Option 1",
            value: 1
        });

        this.optionsSet1.push({
            title: "Option 2",
            value: 2
        });


        this.optionsSet2.push({
            title: "Article 1",
            value: {
                id: 1,
                isRead: true
            }
        });

        this.optionsSet2.push({
            title: "Article 2",
            value: {
                id: 2,
                isRead: false
            }
        });

        this.optionsSet2.push({
            title: "Article 3",
            value: {
                id: 3,
                isRead: true
            }
        });

        // this.selectedOption2 = this.optionsSet2[1].value as ArticleBase;
    }

    public onTitleClicked(): void {
        console.log("Title click happened");
    }

    public onIsReadChanged(id: number, isRead: boolean): void {
        const articlesToSave: ArticleBase[] = this.articles.map((article: Article) => {
            return {
                id: article.id,
                isRead: article.isRead
            };
        });

        this.localStorageService.set("articles", articlesToSave);
    }

    public onLogoutClick(): void {
        this.authenticationService.logout();
        this.router.navigate([CoreRoutes.login.route]);
    }
}
