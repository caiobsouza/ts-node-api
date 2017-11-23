import * as path from "path";
import * as express from "express";
import * as debug from "debug";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import { HomeController } from "./controllers/home.controller";
import { ItemsController } from "./controllers/items.controller";

class App {
    public express: express.Application;

    constructor() {
        require("dotenv").config();

        this.express = express();
        this.database();
        this.setup();
        this.middleware();
        //this.authorization();
        this.routes();
    }

    public authorization(): void {
        // this.express.use(passport.session());
        // this.express.use(passport.initialize());
    }

    public setup(): void {
        this.express.set('views', path.resolve(`${__dirname}/views`));
        this.express.set('view engine', 'pug');
    }

    public middleware(): void {
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    public database() {
        const mongoUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

        const connectionOptions = {
            user: process.env.DB_USER,
            pass: process.env.DB_PWD,
            useMongoClient: true,
            ssl: <%= dbSsl %>
        };

        if (!process.env.DB_USER)
            delete connectionOptions.user;

        if (!process.env.DB_PWD)
            delete connectionOptions.pass;

        (<any>mongoose.Promise) = global.Promise;

        mongoose.connect(mongoUri, connectionOptions)
            .then(() => {
                console.log(`Connected to MongoDB database ${process.env.DB_NAME}@${process.env.DB_HOST}:${process.env.DB_PORT}`);
            })
            .catch(err => {
                console.log(err);
            });
    }

    public routes(): void {
        let router: express.Router = express.Router();
        this.express.use("/", new HomeController().router);
        this.express.use("/api/items", new ItemsController().router);
    }
}

export default new App().express;