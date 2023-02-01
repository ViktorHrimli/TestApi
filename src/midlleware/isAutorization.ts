import { NextFunction, Response } from "express";
import { IMain, IGetUserAuthInfoRequest } from "../types/type";
const jwt = require("jsonwebtoken");

const { SECRET_KEY_JWT } = process.env;

const isAuth = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);

  if (!token) {
    res
      .status(403)
      .json({ status: "Filed", message: "User not autorization!" });
  }

  const decode = jwt.verify(token, SECRET_KEY_JWT);
  req.user = decode;

  next();
};

module.exports = isAuth;
