import { DataSource } from "typeorm";

import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "../utils";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [],
  synchronize: true,
  logging: false,
});
