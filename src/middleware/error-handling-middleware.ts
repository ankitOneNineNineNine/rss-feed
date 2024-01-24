import { Request, Response } from "express";

import { AppError } from "../utils";

const sendErrorDev = (err: unknown, _req: Request, res: Response) => {
  if (err instanceof AppError) {
    return res.status(err.status || 500).json({
      status: err.status || 500,
      message: err.details || err.message,
    });
  }

  return res.status(500).json({
    status: 500,
    message: "Something Went wrong",
  });
};

const sendErrorProd = (err: unknown, _req: Request, res: Response) => {
  if (err instanceof AppError) return res.status(err.status || 500).json(err.message || "Something went Wrong!");
  return res.status(500).json("Something went Wrong!");
};

export const ErrorHandlingMiddleware = (err: unknown, req: Request, res: Response) => {
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, req, res);
  } else {
    sendErrorProd(err, req, res);
  }
};
