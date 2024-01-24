import { Request, Response } from "express";

import { AppError, defaultErrorMessage, defaultErrorStatus } from "../utils";

export const errorHandler = (err: unknown, _req: Request, res: Response) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      status: err.status,
      message: err.details,
    });
  }
  const status = (err as Error).status || defaultErrorStatus;
  const message = (err as Error).message || defaultErrorMessage;
  return res.status(status).json({
    status: status,
    message: message,
  });
};
