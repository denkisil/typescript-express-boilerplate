import { Response } from "express";
// TYPES
import { CustomError } from "@apptypes/customerror.type";

// function of responding to the normal state of the application
export function success(res: Response, data: any) {
  return res.status(200).send({ ok: true, data });
}

// the function of responding to errors in the application
export function fail(res: Response, error: CustomError) {
  const errObject = error.toObject();

  return res.status(errObject.statusCode).send({ ok: false, ...errObject });
}
