import axios from "axios";

import { FeedResponse } from "../types/feed.types";
import { GUARDIAN_APIKEY } from "../utils";

export const getFeed = (section: string) =>
  axios.get<{ response: FeedResponse }>(`https://content.guardianapis.com/${section}`, {
    params: {
      "api-key": GUARDIAN_APIKEY,
      "show-fields": "trailText,thumbnail",
    },
  });
