import { NextFunction, Request, Response } from "express";

import { cacheGet } from "../service/cache";

export const checkCache = (req: Request, res: Response, next: NextFunction) => {
  const key = req.url;
  const cachedBody = cacheGet(key);
  if (cachedBody) {
    return res.send(cachedBody);
  } else {
    next();
  }
};
