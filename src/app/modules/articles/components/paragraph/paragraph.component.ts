import { Component, Input, OnInit } from "@angular/core";

enum RemoteTypes {
    Remote = ": Remote",
    Frontal = ": Frontal"
}

@Component({
  selector: "aac-paragraph",
  templateUrl: "./paragraph.component.html",
  styleUrls: ["./paragraph.component.less"]
})
export class ParagraphComponent implements OnInit {
    @Input() title: string | undefined = "";
    @Input() body: string | undefined = "";
    @Input() isRemote: boolean | undefined = undefined;

    public isRemoteTitle: RemoteTypes | null = null;

    constructor() { }
    
    public ngOnInit(): void {
        this.isRemoteTitle = this.isRemote ? RemoteTypes.Remote : RemoteTypes.Frontal;
    }
}
