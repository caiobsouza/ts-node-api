"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const showdown_1 = require("showdown");
const path = require("path");
const fs = require("fs");
class HomeController {
    constructor() {
        this.router = express_1.Router();
        this.initializeRoutes();
    }
    get(req, res, next) {
        fs.readFile(path.resolve(`${__dirname}/../../README.md`), (err, data) => {
            const converter = new showdown_1.Converter();
            const markdown = converter.makeHtml(data.toString());
            res.render('home', {
                title: 'API',
                markdown: markdown
            });
        });
    }
    initializeRoutes() {
        this.router.get('/', this.get.bind(this));
    }
}
exports.HomeController = HomeController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9ob21lLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBa0U7QUFDbEUsdUNBQXFDO0FBQ3JDLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFFekI7SUFHSTtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUMvQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFFcEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxvQkFBUyxFQUFFLENBQUE7WUFDakMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUVyRCxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDZixLQUFLLEVBQUUsS0FBSztnQkFDWixRQUFRLEVBQUUsUUFBUTthQUNyQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTyxnQkFBZ0I7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNKO0FBekJELHdDQXlCQyIsImZpbGUiOiJjb250cm9sbGVycy9ob21lLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIsIFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnc2hvd2Rvd24nO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbnRyb2xsZXIge1xyXG4gICAgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBSb3V0ZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVSb3V0ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcclxuICAgICAgICBmcy5yZWFkRmlsZShwYXRoLnJlc29sdmUoYCR7X19kaXJuYW1lfS8uLi8uLi9SRUFETUUubWRgKSwgKGVyciwgZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gbmV3IENvbnZlcnRlcigpXHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtkb3duID0gY29udmVydGVyLm1ha2VIdG1sKGRhdGEudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgICAgICByZXMucmVuZGVyKCdob21lJywge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBUEknLFxyXG4gICAgICAgICAgICAgICAgbWFya2Rvd246IG1hcmtkb3duXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVJvdXRlcygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5nZXQoJy8nLCB0aGlzLmdldC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufSJdfQ==
