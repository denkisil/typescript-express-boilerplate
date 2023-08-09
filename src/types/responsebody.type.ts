import { CustomErrorPayload } from "@apptypes/customerror.type";

export interface ResponseType {
  ok: true;
  data: any;
}

export interface ErrorResponseType extends CustomErrorPayload {
  ok: false;
}
