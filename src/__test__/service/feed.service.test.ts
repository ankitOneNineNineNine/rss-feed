import * as guardianAdapterModule from "../../adapter/guardian-feed.adapter";
import { getJsonFeed } from "../../service";
import { NewsPaperTypes } from "../../types/feed.types";

describe("Given getJsonFeed", () => {
  describe("When passed newspaper", () => {
    test("It will call getFeed of respective adapter", () => {
      const getGuardianFeed = vi.fn();
      vi.spyOn(guardianAdapterModule, "getFeed").mockImplementation(getGuardianFeed);
      getJsonFeed("lifeandStyle", NewsPaperTypes.Guardian);
      expect(getGuardianFeed).toBeCalled();
    });
  });
});
