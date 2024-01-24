import { Request, Response } from "express";

import { isValidFeedRequest } from "../../middleware";
import { FeedRequestParams, NewsPaperTypes } from "../../types/feed.types";
import { InvalidSectionError, UnsupportedNewspaperError } from "../../utils/errors";

describe("Given isValidFeedRequest", () => {
  test.each([
    {
      newspaper: NewsPaperTypes.Guardian,
      section: "lifeandstyle",
      expected: "passes",
    },
    {
      newspaper: "Something Else",
      section: "lifeandstyle",
      expected: "does not pass",
      error: UnsupportedNewspaperError,
    },
    {
      newspaper: "",
      section: "",
      expected: "does not pass",
      error: UnsupportedNewspaperError,
    },
    {
      newspaper: NewsPaperTypes.Guardian,
      section: "-asdf",
      expected: "does not pass",
      error: InvalidSectionError,
    },
    {
      newspaper: NewsPaperTypes.Guardian,
      section: "123asdf",
      expected: "does not pass",
      error: InvalidSectionError,
    },
    {
      newspaper: NewsPaperTypes.Guardian,
      section: "asdf-",
      expected: "does not pass",
      error: InvalidSectionError,
    },
  ])("And $newsPaper, $section is passed, Then it $expected", ({ newspaper, section, expected, error }) => {
    const next = vi.fn();
    isValidFeedRequest(
      {
        params: {
          newspaper,
          section,
        },
      } as Request<FeedRequestParams>,
      {} as Response,
      next,
    );
    if (expected === "passes") {
      expect(next).toBeCalledWith();
    } else {
      expect(next).toBeCalledWith(error);
    }
  });
});
