import { NewsPaperTypes } from "../types/feed.types";
import { AppError } from "./app-error";

export const InvalidSectionError = new AppError({
  status: 400,
  message: "Invalid Section Name",
  details: "Section name should be all small case kebab case, eg: abc-def",
});

export const UnsupportedNewspaperError = new AppError({
  status: 400,
  message: "Unsupported Newspaper",
  details: `Newspaper name is not supported. Valid newspapers are ${Object.values(NewsPaperTypes)}`,
});

export const defaultErrorStatus = 500;

export const defaultErrorMessage = "Something went Wrong!";
