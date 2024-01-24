import { mockFeeds } from "../../__mocks__/feeds";
import { buildFeed, jsonToRssXml } from "../../utils";

describe("Given jsonToRssXml", () => {
  describe("When passed formatted json value", () => {
    test("Then it returns W3C compliant RSS XML value", () => {
      const demoFeed = mockFeeds[0];
      const demoUrl = "http://abc.com";
      const demoTitle = "Demo Title";
      const xml = jsonToRssXml(buildFeed([demoFeed]), {
        url: demoUrl,
        title: demoTitle,
      });
      expect(xml).toBe(
        //eslint-disable-next-line
        `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/"><channel><atom:link href="${demoUrl}" rel="self" type="application/rss+xml"/><title>${demoTitle}</title><link>${demoUrl}</link><description>${demoTitle}</description><language>en-US</language><item><title>${demoFeed.webTitle}</title><pubDate>${new Date(demoFeed.webPublicationDate).toUTCString()}</pubDate><guid isPermaLink="true">${demoFeed.webUrl}</guid><description><![CDATA[${demoFeed.fields.trailText}]]></description><media:thumbnail url="${demoFeed.fields.thumbnail}" height="640" width="480"></media:thumbnail></item></channel></rss>`,
      );
    });
  });
});
