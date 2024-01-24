import { Feed, RssInputFeedJson } from "../types/feed.types";

const formatFeedJson = (feeds: Feed[]) =>
  feeds.map((feed) => ({
    title: feed.webTitle,
    date: feed.webPublicationDate,
    url: feed.webUrl,
    content: feed.fields.trailText,
    thumbnail: feed.fields.thumbnail,
  }));

export const buildFeed = (feeds: Feed[]): RssInputFeedJson[] =>
  formatFeedJson(feeds).map((feed) => ({
    item: [
      { title: feed.title },
      {
        pubDate: new Date(feed.date as string).toUTCString(),
      },
      {
        guid: [{ _attr: { isPermaLink: true } }, feed.url],
      },
      {
        description: {
          _cdata: feed.content,
        },
      },
      {
        "media:thumbnail": [{ _attr: { url: feed.thumbnail, height: "640", width: "480" } }],
      },
    ],
  }));
