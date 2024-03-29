import { NextFunction, Request, Response } from "express";

import { addToCache, getJsonFeed } from "../service";
import { FeedRequestParams, NewsPaperTypes } from "../types/feed.types";
import { buildFeed, jsonToRssXml } from "../utils";

export const getFeedController = async (req: Request<FeedRequestParams>, res: Response, next: NextFunction) => {
  try {
    const section = req.params.section;
    const newsPaper = req.params.newspaper;
    const feedJson = await getJsonFeed(section, newsPaper as NewsPaperTypes);

    const feedRss = jsonToRssXml(buildFeed(feedJson.data.response.results), {
      url: feedJson.data.response.edition.webUrl,
      title: feedJson.data.response.edition.webTitle,
    });

    addToCache(req.url, feedRss);
    res.send(feedRss);
  } catch (e) {
    return next(e);
  }
};
