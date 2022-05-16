import "reflect-metadata";
import '../config/dotenv';

import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: false,
  logging: false,
  entities: [
    "src/models/*.ts"
  ],
  migrations: [],
  subscribers: []
})
