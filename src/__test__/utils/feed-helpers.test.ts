import { mockFeeds } from "../../__mocks__/feeds";
import { buildFeed } from "../../utils";

describe("Given buildFeed", () => {
  describe("When passed a feed", () => {
    test("Then it formats the field to JSON for rss feed format", () => {
      const demoFeed = mockFeeds[0];
      const formattedFeed = buildFeed([demoFeed]);
      expect(formattedFeed).toStrictEqual(
        expect.arrayContaining([
          {
            item: [
              {
                title: demoFeed.webTitle,
              },
              {
                pubDate: new Date(demoFeed.webPublicationDate).toUTCString(),
              },
              {
                guid: [
                  {
                    _attr: {
                      isPermaLink: true,
                    },
                  },
                  demoFeed.webUrl,
                ],
              },
              {
                description: {
                  _cdata: demoFeed.sectionName,
                },
              },
            ],
          },
        ]),
      );
    });
  });
});
