import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class SystemErrorHandler implements ErrorHandler {
    public handleError(error: Error) {
      console.error("Unhandled error happened!!");

      console.info(error.message);
    }
  }