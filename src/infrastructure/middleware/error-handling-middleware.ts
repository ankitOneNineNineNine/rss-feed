import { Request, Response } from "express";

const sendErrorDev = (err: unknown, _req: Request, res: Response) => {
  if (err instanceof Error)
    return res.status(err.status || 500).json({
      status: err.status || 500,
      message: err.detail || err.message,
    });

  return res.status(500).json({
    status: 500,
    message: "Something Went wrong",
  });
};

const sendErrorProd = (err: unknown, _req: Request, res: Response) => {
  if (err instanceof Error) return res.status(err.status || 500).json(err.message || "Something went Wrong!");
  return res.status(500).json("Something went Wrong!");
};

export const ErrorHandlingMiddleware = (err: unknown, req: Request, res: Response) => {
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, req, res);
  } else {
    sendErrorProd(err, req, res);
  }
};
