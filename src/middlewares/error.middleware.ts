import { Request, Response, NextFunction } from "express";
// HELPERS
import { fail } from "@helpers/response.helper";
// TYPES
import { CustomError } from "@apptypes/customerror.type";

export default function errorMiddleware(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (error instanceof CustomError) {
      throw error;
    }

    // you can add your own error handling cases, such as Zod validation errors

    throw new CustomError({
      statusCode: 500,
      errorCode: "ServerInternal",
      detail: "some error occured. please contact with administrator"
    });
  } catch (error: any) {
    return fail(res, error);
  }
}
