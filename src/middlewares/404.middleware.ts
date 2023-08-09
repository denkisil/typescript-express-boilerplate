import { Request, Response, NextFunction } from "express";
// TYPES
import { CustomError } from "@apptypes/customerror.type";

export default function notFoundMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    throw new CustomError({
      statusCode: 404,
      errorCode: "NotExist",
      detail:
        "route not found. please read the API documentation for more information"
    });
  } catch (error: any) {
    return next(error);
  }
}
