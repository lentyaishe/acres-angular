import { Component, OnInit } from "@angular/core";

interface IExample {
  title: string;
  example: IExample | null;
}

@Component({
  selector: "app-unhandled-error",
  templateUrl: "./unhandled-error.page.html",
  styleUrls: ["./unhandled-error.page.less"]
})
export class UnhandledErrorPage implements OnInit {
  private _someProperty: IExample = {
    title: "example",
    example: null
  };
 
  constructor() {
  }

  public ngOnInit(): void {
    try {
      const x: string = (this._someProperty.example as any).title;
    }
    catch(error) {
      console.warn(error);
    }
    
    console.log("Hello world!");
  }
}
