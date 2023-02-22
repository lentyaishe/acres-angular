import { Component } from "@angular/core";
import { finalize, from, map, take, tap } from "rxjs";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.page.html",
  styleUrls: ["./rxjs.page.less"]
})
export class RxjsPage {
  constructor() {
    from([1, 2, 3])
      .pipe(
        tap((value: number) => {
          console.log("Value is:", value);
          value = value * 10;
          console.log("Tapped value is:", value)
        }),
        map((value: number) => {
          return value * 3;
        }),
        tap((value: number) => {
          if(value > 3) {
            //throw new Error("Incorrect value");
          }
        }),
        take(2),
        finalize(() => {
          console.log("Finalize: all complete!!");
        })
      ).subscribe({
        next(value: number) {
          console.warn(value);
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          console.log("All complete");
        }
      });
  }
}
