import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` });

const dbName = process.env.DB_NAME || "";
const dbUser = process.env.DB_USER || "";
const dbHost = process.env.DB_HOST || "";
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD || "";

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
});

export default sequelizeConnection;
