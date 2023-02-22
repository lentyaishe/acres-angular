import { Injectable } from "@angular/core";
import { from, map, Observable } from "rxjs";
import { Endpoints } from "src/app/constants/endpoints.constants";
import { IBoardType } from "../models/board-type";
import { AuthenticationService } from "./authentication.service";

interface IBoardTypesReactiveSearchService {
  boardTypes$: Observable<IBoardType[]>;
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
export class BoardTypesReactiveSearchService implements IBoardTypesReactiveSearchService {

  public boardTypes$: Observable<IBoardType[]> = this.authenticationService.getReactive<IBoardTypesResponse>(Endpoints.BoardTypes)
  .pipe(
    map((response: IBoardTypesResponse) => {
      return response.types.map((serverBoardType: IServerBoardType) => {
        return this.toLocalBoardType(serverBoardType);
      })
    })
  );

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  private toLocalBoardType(serverBoardType: IServerBoardType): IBoardType {
    return {
        id: serverBoardType.id,
        type: serverBoardType.type
    };
  }
}
