"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const debug = require("debug");
const App_1 = require("./App");
debug("deezkount-apiserver");
const port = process.env.PORT || 3000;
App_1.default.set("port", port);
const server = http.createServer(App_1.default);
server.listen(port, () => {
    console.log(`App listening at ${port}`);
});
server.on("error", (error) => {
    switch (error.code) {
        case "EACCES":
            console.error(`${port} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${port} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFFL0IsK0JBQXdCO0FBRXhCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRTdCLE1BQU0sSUFBSSxHQUFvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdkQsYUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdEIsTUFBTSxNQUFNLEdBQWdCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBRyxDQUFDLENBQUM7QUFFbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQTRCLEVBQUUsRUFBRTtJQUNoRCxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqQixLQUFLLFFBQVE7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSwrQkFBK0IsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxDQUFDO1FBQ1YsS0FBSyxZQUFZO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksb0JBQW9CLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssQ0FBQztRQUNWO1lBQ0ksTUFBTSxLQUFLLENBQUM7SUFDcEIsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xyXG5pbXBvcnQgKiBhcyBkZWJ1ZyBmcm9tIFwiZGVidWdcIjtcclxuXHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XHJcblxyXG5kZWJ1ZyhcImRlZXprb3VudC1hcGlzZXJ2ZXJcIik7XHJcblxyXG5jb25zdCBwb3J0OiBudW1iZXIgfCBzdHJpbmcgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcbkFwcC5zZXQoXCJwb3J0XCIsIHBvcnQpO1xyXG5cclxuY29uc3Qgc2VydmVyOiBodHRwLlNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKEFwcCk7XHJcblxyXG5zZXJ2ZXIubGlzdGVuKHBvcnQsKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYEFwcCBsaXN0ZW5pbmcgYXQgJHtwb3J0fWApO1xyXG59KTtcclxuc2VydmVyLm9uKFwiZXJyb3JcIiwgKGVycm9yOiBOb2RlSlMuRXJybm9FeGNlcHRpb24pID0+IHtcclxuICAgIHN3aXRjaCAoZXJyb3IuY29kZSkge1xyXG4gICAgICAgIGNhc2UgXCJFQUNDRVNcIjpcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtwb3J0fSByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzYCk7XHJcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkVBRERSSU5VU0VcIjpcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtwb3J0fSBpcyBhbHJlYWR5IGluIHVzZWApO1xyXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59KTsiXX0=
