import { Component } from "@angular/core";
import { catchError, EMPTY, Observable } from "rxjs";
import { IBoardType } from "../../models/board-type";
import { BoardTypesReactiveService } from "../../services/board-types-reactive.service";

@Component({
  selector: "app-board-types-reactive-cached",
  templateUrl: "./board-types-reactive-cached.page.html",
  styleUrls: ["./board-types-reactive-cached.page.less"]
})
export class BoardTypesReactiveCachedPage {
  public boardTypes$: Observable<IBoardType[]> = this.boardTypesReactiveService.boardTypesCached$.pipe(
    catchError((error: any, caught: Observable<IBoardType[]>) => {
      console.error(error);
      return EMPTY;
    })
  );

  constructor(
    private boardTypesReactiveService: BoardTypesReactiveService
  ) { }
}
