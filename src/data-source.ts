import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Contact } from "./entities/contacts.entity";
import { Customer } from "./entities/customers.entity";
import { createTables1679923032998 } from "./migrations/1679923032998-createTables";

const dataSourceConfig = (): DataSourceOptions => {
  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [Contact, Customer],
    };
  }

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [createTables1679923032998],
    entities: [Contact, Customer],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
