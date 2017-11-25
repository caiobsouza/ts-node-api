import * as mocha from "mocha";
import * as chai from "chai";
const chaiHttp = require("chai-http");

import App from "../src/app";

chai.use(chaiHttp);

describe("baseRoute", () => {
    it("shows home page", () => {
        return chai.request(App).get("/")
            .then(res => {
                chai.expect(res.type).to.eql("text/html");
            });
    });
});