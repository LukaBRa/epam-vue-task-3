import { formatGenres } from "../formatGenres";

describe("formatGenres util function tests", () => {

    it("Function should return empty string", () => {
        expect(formatGenres([])).to.eq("");
    });

    it("Function should return Action", () => {
        expect(formatGenres(["Action"])).to.eq("Action");
    });

    it("Function should return Action, Comedy, Drama", () => {
        expect(formatGenres(["Action, Comedy, Drama"])).to.eq("Action, Comedy, Drama");
    });

});