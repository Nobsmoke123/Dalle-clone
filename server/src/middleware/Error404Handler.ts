import { Request, Response, NextFunction } from "express";
import { NotFoundExceptionError } from "./../interfaces/ErrorClasses";

export default async (req: Request, _res: Response, next: NextFunction) => {
  const err = new NotFoundExceptionError(`Route ${req.url} does not exist.`);
  next(err);
};
