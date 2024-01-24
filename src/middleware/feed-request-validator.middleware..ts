import { NextFunction, Request, Response } from "express";

import { FeedRequestParams, NewsPaperTypes } from "../types/feed.types";
import { InvalidSectionError, isKebabCase, UnsupportedNewspaperError } from "../utils";

export const isFeedType = (feed: string): feed is NewsPaperTypes =>
  Object.values(NewsPaperTypes).includes(feed as NewsPaperTypes);

export const isValidFeedRequest = (req: Request<FeedRequestParams>, _res: Response, next: NextFunction) => {
  if (!isFeedType(req.params.newspaper)) {
    return next(UnsupportedNewspaperError);
  }
  if (!isKebabCase(req.params.section)) {
    return next(InvalidSectionError);
  }
  next();
};
