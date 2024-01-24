import { NextFunction, Request, Response } from "express";

import { FeedTypes } from "../service";
import { AppError, isKebabCase } from "../utils";

export const isFeedType = (feed: string): feed is FeedTypes => Object.values(FeedTypes).includes(feed as FeedTypes);

export const validFeedRequest = (req: Request, _res: Response, next: NextFunction) => {
  if (!isFeedType(req.params.newspaper)) {
    return next(
      new AppError({
        status: 400,
        message: "Invalid Newspaper",
        details: "Newspaper name is invalid. Valid newspapers are `guardian`",
      }),
    );
  }
  if (!isKebabCase(req.params.section)) {
    return next(
      new AppError({
        status: 400,
        message: "Invalid Section Name",
        details: "Section name should be all small case kebab case, eg: abc-def",
      }),
    );
  }
  next();
};
