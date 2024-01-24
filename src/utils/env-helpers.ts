import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const GUARDIAN_APIKEY = process.env.GUARDIAN_APIKEY;
export const DB_URL = process.env.DB_URL;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = parseInt(process.env.DB_PORT!);
export const DB_USER = process.env.DB_USER;
export const DB_NAME = process.env.DB_NAME;