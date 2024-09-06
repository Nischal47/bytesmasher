import './config';
import express, { Express } from "express";
import { AppDataSource } from "./database/DataSource";
import router from "./routers";

const app: Express = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); // For JSON bodies
app.use(express.urlencoded({ extended: true })); // For URL-encoded bodies

app.use(router);

const port = process.env.APP_PORT || 8080;

AppDataSource.initialize()
    .then(() => {
        console.log("[Postgres]: Database connected");
    })
    .catch((error) => {
        console.error("[Postgres]: Database connection failed", error);
    });

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
