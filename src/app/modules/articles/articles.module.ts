import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { ArticleComponent } from './components/article/article.component';
import { FormsModule } from "@angular/forms";
import { SubTitlePipe } from './pipes/sub-title.pipe';

@NgModule({
    declarations: [
        ParagraphComponent,
        ArticleComponent,
        SubTitlePipe
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ArticleComponent
    ]
})
export class ArticlesModule { }
