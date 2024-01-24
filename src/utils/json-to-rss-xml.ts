import xml from "xml";

import { RssInputFeedJson } from "../types/feed.types";

export const jsonToRssXml = (
  json: RssInputFeedJson[],
  additionalInfo: {
    url: string;
    title: string;
  },
) => {
  const feedObject = {
    rss: [
      {
        _attr: {
          version: "2.0",
          "xmlns:atom": "http://www.w3.org/2005/Atom",
        },
      },
      {
        channel: [
          {
            "atom:link": {
              _attr: {
                href: `${additionalInfo.url}`,
                rel: "self",
                type: "application/rss+xml",
              },
            },
          },
          {
            title: additionalInfo.title,
          },
          {
            link: additionalInfo.url,
          },
          { description: additionalInfo.title },
          { language: "en-US" },
          ...json,
        ],
      },
    ],
  };
  return '<?xml version="1.0" encoding="UTF-8"?>' + xml(feedObject);
};
