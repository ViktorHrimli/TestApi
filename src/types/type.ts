import { Request, Response, NextFunction } from "express";

export interface IGetUserAuthInfoRequest extends Request {
  user: { id: string; roles: [value: string] };
}

export interface IMain {
  req: IGetUserAuthInfoRequest;
  res: Response;
  next: NextFunction;
}
