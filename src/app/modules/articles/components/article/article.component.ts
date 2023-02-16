import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { Paragraph } from "../../models/paragraph";
import { ParagraphComponent } from "../paragraph/paragraph.component";

enum ArticleStatus {
    Read = "read",
    Unread = "unread"
}

@Component({
    selector: "aac-article",
    templateUrl: "./article.component.html",
    styleUrls: ["./article.component.less"]
})
export class ArticleComponent implements OnInit, AfterViewInit {
    @Input() date: Date | undefined = undefined;
    @Input() title: string | undefined = "";
    @Input() isRead: boolean | undefined = undefined;
    @Input() subTitle: string | undefined = "";
    @Input() paragraphs: Paragraph[] | undefined = undefined;

    @Output() isReadChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() titleClicked: EventEmitter<void> = new EventEmitter<void>();

    @ViewChild("titleElement") titleElement: ElementRef | undefined = undefined;
    @ViewChildren(ParagraphComponent) paragraphElements: QueryList<ParagraphComponent> | undefined = undefined;

    public ArticleStatus = ArticleStatus;

    // public firstParagraph: Paragraph | null = null;

    constructor(
        private changeDetectorRef: ChangeDetectorRef
    ) {
        // console.log("Constructor: title:", this.title); // title is still "" which is the default value
    }

    public ngOnInit(): void {
        // console.log("OnInit: title:", this.title); // here title gets the actual value pased from outside
        // if (this.paragraphs && this.paragraphs.length > 0) {
        //     this.firstParagraph = this.paragraphs[0];
        // }

        console.log("OnInit: title:", this.titleElement)

        this.isRead = false;
        // About 70% of such an exception will be fixed by cdr (changeDetectorRef)
        // ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'true'. Current value: 'false'
        this.changeDetectorRef.detectChanges();

        // if not solved by cdr do it with setTimeout
        setTimeout(() => {
            this.isRead = false;   
        });
    }
    
    public ngAfterViewInit(): void {
        console.log("AfterViewInit: title:", this.titleElement)
    }

    public onIsReadChanged(): void {
        this.isReadChange.emit(this.isRead);
    }

    public onTitleClicked(): void {
        this.titleClicked.emit();

        const titleElem: HTMLSpanElement = this.titleElement?.nativeElement;
        titleElem.style.color = "blue";

        // console.log(titleElem.classList);

        this.paragraphElements?.forEach((paragraphElement: ParagraphComponent) => {
            console.log(paragraphElement);
        });
    }
}
