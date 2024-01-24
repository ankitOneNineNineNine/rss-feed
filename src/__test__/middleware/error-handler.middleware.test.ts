import { Request, Response } from "express";

import { errorHandler } from "../../middleware/error-handler.middleware";
import { AppError, defaultErrorMessage, defaultErrorStatus } from "../../utils";

const status = 400;
const details = "something is wrong";

const message = "wrong";

const appError = new AppError({ status, details, message });

describe("Given errorHandler", () => {
  describe("When error is instance of AppError of error", () => {
    test("Then it responds with status and details as message", () => {
      const res = {} as unknown as Response;
      res.json = vi.fn();
      res.status = vi.fn(() => res);

      errorHandler(appError, {} as Request, res);

      expect(res.status).toBeCalledWith(status);
      expect(res.json).toBeCalledWith({
        message: details,
        status,
      });
    });
  });
  describe("When error is not instance of AppError", () => {
    describe("And error does not have status and message", () => {
      test("Then it responds with  default status and default message", () => {
        const res = {} as unknown as Response;
        res.json = vi.fn();
        res.status = vi.fn(() => res);

        errorHandler(new Error(), {} as Request, res);

        expect(res.status).toBeCalledWith(defaultErrorStatus);
        expect(res.json).toBeCalledWith({
          message: defaultErrorMessage,
          status: defaultErrorStatus,
        });
      });
    });
    describe("When error has message", () => {
      test("Then it responds with error message", () => {
        const res = {} as unknown as Response;
        res.json = vi.fn();
        res.status = vi.fn(() => res);

        const errMessage = "error message";

        errorHandler(new Error(errMessage), {} as Request, res);

        expect(res.status).toBeCalledWith(defaultErrorStatus);
        expect(res.json).toBeCalledWith({
          status: defaultErrorStatus,
          message: errMessage,
        });
      });
    });
  });
});
