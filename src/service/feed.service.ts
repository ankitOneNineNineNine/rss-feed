import * as GuardianFeedAdapter from "../adapter";
import { NewsPaperTypes } from "../types/feed.types";

const getAdapter = (type = NewsPaperTypes.Guardian) => {
  switch (type) {
    case NewsPaperTypes.Guardian:
      return GuardianFeedAdapter;
    default:
      return GuardianFeedAdapter;
  }
};

export const getJsonFeed = (section: string, type = NewsPaperTypes.Guardian) => getAdapter(type).getFeed(section);
