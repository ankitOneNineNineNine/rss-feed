import { NextFunction, Request, Response } from "express";

import { FeedTypes, getJsonFeed } from "../service";
import { buildFeed, jsonToRss } from "../utils";

export const getFeedController = async (
  req: Request<{ newspaper: string; section: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const section = req.params.section;
    const newsPaper = req.params.newspaper;
    const feedJson = await getJsonFeed(section, newsPaper as FeedTypes);

    const feedRss = jsonToRss(buildFeed(feedJson.data.response.results), {
      url: feedJson.data.response.edition.webUrl,
      title: feedJson.data.response.edition.webTitle,
    });

    res.setHeader("content-type", "text/xml");
    res.send(feedRss);
  } catch (e) {
    return next(e);
  }
};
