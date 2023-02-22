import { Injectable } from "@angular/core";
import { Endpoints } from "src/app/constants/endpoints.constants";
import { IBoardType } from "../models/board-type";
import { AuthenticationService } from "./authentication.service";
import * as _ from "underscore";
import { Observable, Subject } from "rxjs";

interface IBoardTypesService {
  boardTypes: IBoardType[];
  isReady: boolean;

  onReady: Observable<void>;
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
export class BoardTypesService implements IBoardTypesService {
  private _boardTypes: IBoardType[] = [];
  private _isReady: boolean = false;

  private _onReadySubject: Subject<void> = new Subject<void>();

  constructor(
    authenticationService: AuthenticationService
  ) { 

    authenticationService.get<IBoardTypesResponse>(Endpoints.BoardTypes)
      .then((response: IBoardTypesResponse) => {
          this._boardTypes = _.map(response.types, (serverBoardType: IServerBoardType) => this.toLocalBoardType(serverBoardType));

          this._onReadySubject.next();
          this._isReady = true;
      })
      .catch((error) => {
          console.warn(error);
      });

  }

  public get boardTypes(): IBoardType[] {
    return this._boardTypes;
  }

  public get isReady(): boolean {
    return this._isReady;
  }

  public get onReady(): Observable<void> {
    return this._onReadySubject.asObservable();
  }

  private toLocalBoardType(serverBoardType: IServerBoardType): IBoardType {
    return {
        id: serverBoardType.id,
        type: serverBoardType.type
    };
  }
}
