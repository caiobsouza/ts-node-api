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
        this.setup();
        this.middleware();
        this.authorization();
        this.routes();
    }
    authorization() {
        // Strategies.init();
        // this.express.use(passport.session());
        // this.express.use(passport.initialize());
    }
    setup() {
        this.express.set('views', `${__dirname}/views`);
        this.express.set('view engine', 'pug');
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
        this.express.use("/", new home_controller_1.HomeController().router);
    }
}
exports.default = new App().express;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtQ0FBbUM7QUFFbkMsaUNBQWlDO0FBQ2pDLDBDQUEwQztBQUMxQyxxQ0FBcUM7QUFFckMsbUVBQStEO0FBQy9ELDZEQUE2RDtBQUM3RCx5RUFBeUU7QUFFekU7SUFHSTtRQUNJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sYUFBYTtRQUNoQixxQkFBcUI7UUFDckIsd0NBQXdDO1FBQ3hDLDJDQUEyQztJQUMvQyxDQUFDO0lBRU0sS0FBSztRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsUUFBUSxDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxVQUFVO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLFFBQVE7UUFDWCxNQUFNLFFBQVEsR0FBRyxhQUFhLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEcsTUFBTSxpQkFBaUIsR0FBRztZQUN0QixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO1lBQ3pCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07WUFDeEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQzlCLEdBQUcsRUFBRSxJQUFJO1NBQ1osQ0FBQztRQUVGLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDO2FBQ3hDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxNQUFNO1FBQ1QsSUFBSSxNQUFNLEdBQW1CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxnQ0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNKO0FBRUQsa0JBQWUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCAqIGFzIGRlYnVnIGZyb20gXCJkZWJ1Z1wiO1xyXG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSBcIm1vcmdhblwiO1xyXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xyXG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmltcG9ydCB7IEhvbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlcnMvaG9tZS5jb250cm9sbGVyXCI7XHJcbi8vIGltcG9ydCB7IENhdGVnb3J5Um91dGVzIH0gZnJvbSBcIi4vcm91dGVzL2NhdGVnb3J5LnJvdXRlc1wiO1xyXG4vLyBpbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRlcyB9IGZyb20gJy4vcm91dGVzL2F1dGhlbnRpY2F0aW9uLnJvdXRlcyc7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgcHVibGljIGV4cHJlc3M6IGV4cHJlc3MuQXBwbGljYXRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgcmVxdWlyZShcImRvdGVudlwiKS5jb25maWcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5leHByZXNzID0gZXhwcmVzcygpO1xyXG4gICAgICAgIC8vdGhpcy5kYXRhYmFzZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgICAgICB0aGlzLm1pZGRsZXdhcmUoKTtcclxuICAgICAgICB0aGlzLmF1dGhvcml6YXRpb24oKTtcclxuICAgICAgICB0aGlzLnJvdXRlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdXRob3JpemF0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFN0cmF0ZWdpZXMuaW5pdCgpO1xyXG4gICAgICAgIC8vIHRoaXMuZXhwcmVzcy51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcclxuICAgICAgICAvLyB0aGlzLmV4cHJlc3MudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXhwcmVzcy5zZXQoJ3ZpZXdzJywgYCR7X19kaXJuYW1lfS92aWV3c2ApXHJcbiAgICAgICAgdGhpcy5leHByZXNzLnNldCgndmlldyBlbmdpbmUnLCAncHVnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1pZGRsZXdhcmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShsb2dnZXIoXCJkZXZcIikpO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzcy51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzcy51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGF0YWJhc2UoKSB7XHJcbiAgICAgICAgY29uc3QgbW9uZ29VcmkgPSBgbW9uZ29kYjovLyR7cHJvY2Vzcy5lbnYuREJfSE9TVH06JHtwcm9jZXNzLmVudi5EQl9QT1JUfS8ke3Byb2Nlc3MuZW52LkRCX05BTUV9YDtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuREJfUFdELFxyXG4gICAgICAgICAgICB1c2VNb25nb0NsaWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgcHJvbWlzZUxpYnJhcnk6IGdsb2JhbC5Qcm9taXNlLFxyXG4gICAgICAgICAgICBzc2w6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtb25nb29zZS5jb25uZWN0KG1vbmdvVXJpLCBjb25uZWN0aW9uT3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gZGF0YWJhc2UgQCBhenVyZSBjb3Ntb3NcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJvdXRlcygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcm91dGVyOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShcIi9cIiwgbmV3IEhvbWVDb250cm9sbGVyKCkucm91dGVyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwcCgpLmV4cHJlc3M7Il19
