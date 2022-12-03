import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: __dirname + `/../../.env` });

const database = process.env.DB_NAME || "";
const username = process.env.DB_USER || "";
const host = process.env.DB_HOST || "";
const dialect = process.env.DB_DRIVER as Dialect;
const password = process.env.DB_PASSWORD || "";

const isTest = process.env.NODE_ENV === "test";

const sequelizeConnection = new Sequelize(
  isTest
    ? { dialect: "sqlite" }
    : {
        database,
        username,
        host,
        dialect,
        password,
      }
);

export default sequelizeConnection;
