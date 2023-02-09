import { Component } from "@angular/core";
import { Paragraph } from "./modules/articles/models/paragraph";
import { LocalStorageService } from "./modules/core/services/local-storage.service";

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
    public articles: Article[] = [];

    constructor(
        private localStorageService: LocalStorageService
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
}
