import * as GuardianFeedAdapter from "../adapter/guardian-feed.adapter";

export enum FeedTypes {
  Guardian = "guardian",
}

const getAdapter = (type = FeedTypes.Guardian) => {
  switch (type) {
    case FeedTypes.Guardian:
      return GuardianFeedAdapter;
    default:
      return GuardianFeedAdapter;
  }
};

export const getJsonFeed = (section = "", type = FeedTypes.Guardian) => getAdapter(type).getFeed(section);
