import { Component } from "@angular/core";
import { Observable, catchError, EMPTY, combineLatest, map, BehaviorSubject } from "rxjs";
import { IBoardType } from "../../models/board-type";
import { BoardTypesReactiveSearchService } from "../../services/board-types-reactive-search.service";

interface combinedSearchResult {
  boardTypes: IBoardType[];
  searchBy: string;
}

@Component({
  selector: "app-board-types-reactive-search",
  templateUrl: "./board-types-reactive-search.page.html",
  styleUrls: ["./board-types-reactive-search.page.less"]
})
export class BoardTypesReactiveSearchPage {

  private _boardTypesSearchSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private _boardTypesSearchAction$: Observable<string> = this._boardTypesSearchSubject.asObservable();

  public boardTypes$: Observable<IBoardType[]> = 
    combineLatest([
      this.boardTypeReactiveSearchService.boardTypes$,
      this._boardTypesSearchAction$
    ])
    .pipe(
      map(([boardTypes, searchBy]) => {
        return boardTypes.filter((boardType: IBoardType) => boardType.type.indexOf(searchBy) > -1);
      }),
      catchError((error: any, caught: Observable<IBoardType[]>) => {
        console.error(error);
        return EMPTY;
      })
    );

  public searchBy: string = "";

  constructor(
    private boardTypeReactiveSearchService: BoardTypesReactiveSearchService
  ) {}

  public onSearchByKeyUp(): void {
    this._boardTypesSearchSubject.next(this.searchBy);
  }
}
