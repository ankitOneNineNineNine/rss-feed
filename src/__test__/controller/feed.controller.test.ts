import { NextFunction, Request, Response } from "express";

import { mockFeeds } from "../../__mocks__/feeds";
import { getFeedController } from "../../controller/feed.controller";
import * as feedService from "../../service/feed.service";
import { FeedRequestParams, NewsPaperTypes } from "../../types/feed.types";
import { buildFeed } from "../../utils";
import * as jsonToRssModule from "../../utils/json-to-rss-xml";

describe("Given getFeedController", () => {
  describe("When request has newspaper and section", () => {
    test("Then getJsonFeed is called with newspaper and section", async () => {
      const getJsonFeed = vi.fn();
      vi.spyOn(feedService, "getJsonFeed").mockImplementation(getJsonFeed);
      const params = {
        newspaper: NewsPaperTypes.Guardian,
        section: "lifeandstyle",
      };
      getFeedController(
        {
          params,
        } as Request<FeedRequestParams>,
        {} as Response,
        (() => {}) as NextFunction,
      );
      expect(getJsonFeed).toBeCalledWith(params.section, params.newspaper);
    });
    describe("And getJsonFeed returns value", () => {
      test("Then jsonToRssXml is called with proper parameters", async () => {
        const getJsonFeed = vi.fn().mockImplementation(
          async () =>
            await Promise.resolve({
              data: {
                response: {
                  edition: {},
                  results: mockFeeds,
                },
              },
            }),
        );
        vi.spyOn(feedService, "getJsonFeed").mockImplementation(getJsonFeed);

        const jsonToRssXml = vi.fn();
        vi.spyOn(jsonToRssModule, "jsonToRssXml").mockImplementation(jsonToRssXml);

        await getFeedController(
          {
            params: {
              newspaper: NewsPaperTypes.Guardian,
              section: "lifeandstyle",
            },
          } as Request<FeedRequestParams>,
          {} as Response,
          (() => {}) as NextFunction,
        );

        expect(jsonToRssXml).toBeCalledWith(buildFeed(mockFeeds), {});
      });
    });
  });
});
