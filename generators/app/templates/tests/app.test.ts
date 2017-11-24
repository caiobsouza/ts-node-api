import * as mocha from "mocha";
import * as chai from "chai";
const chaiHttp = require("chai-http");

import App from "../src/app";

chai.use(chaiHttp);

describe("baseRoute", () => {
    it("should be a json", () => {
        return chai.request(App).get("/")
            .then(res => {
                chai.expect(res.type).to.eql("application/json");
            });
    });
});