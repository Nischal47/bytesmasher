import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entites/User";

const host = process.env.DB_HOST;
const port = parseInt(process.env.DB_PORT || "5432", 10);
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

export const AppDataSource = new DataSource({
    type: 'postgres',
    host,
    port,
    database,
    username,
    password,
    entities: [User],
    synchronize: true,
    migrations: [
        "src/database/migrations/*.ts"
    ],
});


