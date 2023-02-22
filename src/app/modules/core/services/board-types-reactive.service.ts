import { Injectable } from "@angular/core";
import { from, map, Observable } from "rxjs";
import { Endpoints } from "src/app/constants/endpoints.constants";
import { IBoardType } from "../models/board-type";
import { AuthenticationService } from "./authentication.service";

interface IBoardTypesReactiveService {
  boardTypes$: Observable<IBoardType[]>;
  boardTypesCached$: Observable<IBoardType[]>;
}

interface IBoardTypesResponse {
  types: IServerBoardType[];
}

interface IServerBoardType {
  id: number;
  type: string;
}

@Injectable({
  providedIn: "root"
})
export class BoardTypesReactiveService implements IBoardTypesReactiveService {

  public boardTypes$: Observable<IBoardType[]> = this.authenticationService.getReactive<IBoardTypesResponse>(Endpoints.BoardTypes)
  .pipe(
    map((response: IBoardTypesResponse) => {
      return response.types.map((serverBoardType: IServerBoardType) => {
        return this.toLocalBoardType(serverBoardType);
      })
    })
  );

  private _boardTypes: IBoardType[] | null = null;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  public get boardTypesCached$(): Observable<IBoardType[]> {
    if(!this._boardTypes) {

      return this.authenticationService.getReactive<IBoardTypesResponse>(Endpoints.BoardTypes)
        .pipe(
          map((response: IBoardTypesResponse) => {
            this._boardTypes = response.types.map((serverBoardType: IServerBoardType) => {
              return this.toLocalBoardType(serverBoardType);
            })

            return this._boardTypes;
          })
        );
    }
    else {
      return from([this._boardTypes]);
    }
  }

  private toLocalBoardType(serverBoardType: IServerBoardType): IBoardType {
    return {
        id: serverBoardType.id,
        type: serverBoardType.type
    };
  }
}
