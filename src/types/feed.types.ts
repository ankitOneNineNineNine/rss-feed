export type Feed = {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  fields: {
    trailText: string;
    thumbnail: string;
  };
};

export type Edition = {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  code: string;
};

export type Section = {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  editions: Edition[];
};

export type FeedResponse = {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  edition: Edition;
  section: Section;
  results: Feed[];
};

export type RssInputFeedJson = {
  item: [
    { title: string },
    {
      pubDate: string;
    },
    {
      guid: [{ _attr: { isPermaLink: boolean } }, string];
    },
    {
      description: {
        _cdata: string;
      };
    },
    {
      "media:thumbnail": [{ _attr: { url: string; height: string; width: string } }];
    },
  ];
};

export enum NewsPaperTypes {
  Guardian = "guardian",
}

export type FeedRequestParams = {
  newspaper: string;
  section: string;
};
