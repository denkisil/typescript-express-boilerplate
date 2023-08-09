import { Request, Response, NextFunction } from "express";
// TYPES
import { CustomError } from "@apptypes/customerror.type";

export default class ExampleHandler {
  static async exampleHandler(req: Request, res: Response, next: NextFunction) {
    // in route handlers you must catch errors manually
    // otherwhise your app just will be crashed
    try {
      throw new CustomError({
        statusCode: 501,
        errorCode: "NotImplemented",
        detail: "method not implemented"
      });
    } catch (error: any) {
      // calling error middleware
      return next(error);
    }
  }
}
