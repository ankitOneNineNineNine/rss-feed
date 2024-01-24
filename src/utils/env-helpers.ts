import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;
export const GUARDIAN_APIKEY = process.env.GUARDIAN_APIKEY;
