import * as http from "http";
import * as debug from "debug";

import App from "./App";

debug("tsnode-apiserver");

const port: number | string = process.env.PORT || 3000;
App.set("port", port);

const server: http.Server = http.createServer(App);

server.listen(port,() => {
    console.log(`App listening at ${port}`);
});
server.on("error", (error: NodeJS.ErrnoException) => {
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