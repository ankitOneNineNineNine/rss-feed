import { NextFunction, Request, Response } from "express";

export const setXmlResponseHeader = (_req: Request, res: Response, next: NextFunction) => {
  res.setHeader("content-type", "text/xml");
  next();
};
