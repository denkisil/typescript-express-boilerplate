import { Request, Response, NextFunction } from "express";

export type ExpressMiddlewareType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

export type ExpresErrorMiddlewareType = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export type ExpressHandlerType = ExpressMiddlewareType;
