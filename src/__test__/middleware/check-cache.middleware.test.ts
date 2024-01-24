import { Request, Response } from "express";

import { checkCache } from "../../middleware/check-cache-middleware";
import * as cacheModule from "../../service/cache";

describe("Given checkCache", () => {
  describe("When value is found in cache", () => {
    test("Then it responds with the cached value", () => {
      const value = "value";
      vi.spyOn(cacheModule, "cacheGet").mockImplementation(() => value);
      const send = vi.fn();
      checkCache(
        { url: "/cache" } as Request,
        {
          send,
        } as unknown as Response,
        () => {},
      );
      expect(send).toBeCalledWith(value);
    });
  });
  describe("When value is not found in cache", () => {
    test("Then it moves forward with next", () => {
      vi.spyOn(cacheModule, "cacheGet").mockImplementation(() => 0);
      const send = vi.fn();
      const next = vi.fn();
      checkCache(
        { url: "/cache" } as Request,
        {
          send,
        } as unknown as Response,
        next,
      );
      expect(send).not.toBeCalled();
      expect(next).toBeCalled();
    });
  });
});
