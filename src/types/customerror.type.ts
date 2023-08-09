export type AppCodeErrors =
  | "NotImplemented"
  | "ServerInternal"
  | "NotExist"
  | "Forbidden"
  | "BadRequestBody"
  | "Unauthorized";

export type HttpErrorCodes = 400 | 401 | 403 | 404 | 500 | 501 | 503;

export interface CustomErrorPayload {
  statusCode: HttpErrorCodes;
  errorCode: AppCodeErrors;
  detail: any;
}

export class CustomError {
  constructor(private readonly payload: CustomErrorPayload) {}

  toObject() {
    return this.payload;
  }
}
