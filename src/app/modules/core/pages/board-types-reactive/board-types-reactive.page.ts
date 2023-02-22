import { Component } from "@angular/core";
import { catchError, EMPTY, Observable } from "rxjs";
import { IBoardType } from "../../models/board-type";
import { BoardTypesReactiveService } from "../../services/board-types-reactive.service";

@Component({
  selector: "app-board-types-reactive",
  templateUrl: "./board-types-reactive.page.html",
  styleUrls: ["./board-types-reactive.page.less"]
})
export class BoardTypesReactivePage {

  public boardTypes$: Observable<IBoardType[]> = this.boardTypesReactiveService.boardTypes$.pipe(
    catchError((error: any, caught: Observable<IBoardType[]>) => {
      console.error(error);
      return EMPTY;
    })
  );

  constructor(
    private boardTypesReactiveService: BoardTypesReactiveService
  ) {}
}
