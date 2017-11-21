"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const home_controller_1 = require("./controllers/home.controller");
// import { CategoryRoutes } from "./routes/category.routes";
// import { AuthenticationRoutes } from './routes/authentication.routes';
class App {
    constructor() {
        require("dotenv").config();
        this.express = express();
        //this.database();
        this.middleware();
        this.authorization();
        this.routes();
    }
    authorization() {
        // Strategies.init();
        // this.express.use(passport.session());
        // this.express.use(passport.initialize());
    }
    middleware() {
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    database() {
        const mongoUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
        const connectionOptions = {
            user: process.env.DB_USER,
            pass: process.env.DB_PWD,
            useMongoClient: true,
            promiseLibrary: global.Promise,
            ssl: true
        };
        mongoose.connect(mongoUri, connectionOptions)
            .then(() => {
            console.log("Connected to database @ azure cosmos");
        })
            .catch(err => {
            console.log(err);
        });
    }
    routes() {
        let router = express.Router();
        this.express.use("/api/", new home_controller_1.HomeController().router);
    }
}
exports.default = new App().express;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtQ0FBbUM7QUFFbkMsaUNBQWlDO0FBQ2pDLDBDQUEwQztBQUMxQyxxQ0FBcUM7QUFFckMsbUVBQStEO0FBQy9ELDZEQUE2RDtBQUM3RCx5RUFBeUU7QUFFekU7SUFHSTtRQUNJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sYUFBYTtRQUNoQixxQkFBcUI7UUFDckIsd0NBQXdDO1FBQ3hDLDJDQUEyQztJQUMvQyxDQUFDO0lBRU0sVUFBVTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSxRQUFRO1FBQ1gsTUFBTSxRQUFRLEdBQUcsYUFBYSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xHLE1BQU0saUJBQWlCLEdBQUc7WUFDdEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztZQUN6QixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQ3hCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGNBQWMsRUFBRSxNQUFNLENBQUMsT0FBTztZQUM5QixHQUFHLEVBQUUsSUFBSTtTQUNaLENBQUM7UUFFRixRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQzthQUN4QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sTUFBTTtRQUNULElBQUksTUFBTSxHQUFtQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksZ0NBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDSjtBQUVELGtCQUFlLElBQUksR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgKiBhcyBkZWJ1ZyBmcm9tIFwiZGVidWdcIjtcclxuaW1wb3J0ICogYXMgbG9nZ2VyIGZyb20gXCJtb3JnYW5cIjtcclxuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcclxuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL2hvbWUuY29udHJvbGxlclwiO1xyXG4vLyBpbXBvcnQgeyBDYXRlZ29yeVJvdXRlcyB9IGZyb20gXCIuL3JvdXRlcy9jYXRlZ29yeS5yb3V0ZXNcIjtcclxuLy8gaW1wb3J0IHsgQXV0aGVudGljYXRpb25Sb3V0ZXMgfSBmcm9tICcuL3JvdXRlcy9hdXRoZW50aWNhdGlvbi5yb3V0ZXMnO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIHB1YmxpYyBleHByZXNzOiBleHByZXNzLkFwcGxpY2F0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwcmVzcyA9IGV4cHJlc3MoKTtcclxuICAgICAgICAvL3RoaXMuZGF0YWJhc2UoKTtcclxuICAgICAgICB0aGlzLm1pZGRsZXdhcmUoKTtcclxuICAgICAgICB0aGlzLmF1dGhvcml6YXRpb24oKTtcclxuICAgICAgICB0aGlzLnJvdXRlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdXRob3JpemF0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFN0cmF0ZWdpZXMuaW5pdCgpO1xyXG4gICAgICAgIC8vIHRoaXMuZXhwcmVzcy51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcclxuICAgICAgICAvLyB0aGlzLmV4cHJlc3MudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1pZGRsZXdhcmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShsb2dnZXIoXCJkZXZcIikpO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzcy51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzcy51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGF0YWJhc2UoKSB7XHJcbiAgICAgICAgY29uc3QgbW9uZ29VcmkgPSBgbW9uZ29kYjovLyR7cHJvY2Vzcy5lbnYuREJfSE9TVH06JHtwcm9jZXNzLmVudi5EQl9QT1JUfS8ke3Byb2Nlc3MuZW52LkRCX05BTUV9YDtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuREJfUFdELFxyXG4gICAgICAgICAgICB1c2VNb25nb0NsaWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgcHJvbWlzZUxpYnJhcnk6IGdsb2JhbC5Qcm9taXNlLFxyXG4gICAgICAgICAgICBzc2w6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtb25nb29zZS5jb25uZWN0KG1vbmdvVXJpLCBjb25uZWN0aW9uT3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gZGF0YWJhc2UgQCBhenVyZSBjb3Ntb3NcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJvdXRlcygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcm91dGVyOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShcIi9hcGkvXCIsIG5ldyBIb21lQ29udHJvbGxlcigpLnJvdXRlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBcHAoKS5leHByZXNzOyJdfQ==
