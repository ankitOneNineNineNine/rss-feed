import { NextFunction, Request, Response } from "express";

import { getJsonFeed } from "../service";
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
    res.setHeader("content-type", "text/xml");
    res.send(feedRss);
  } catch (e) {
    return next(e);
  }
};
