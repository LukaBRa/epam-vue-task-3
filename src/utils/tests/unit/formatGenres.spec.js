import { formatGenres } from "../../formatGenres";
import { test, expect } from "vitest";

test("Function should return empty string", () => {
    expect(formatGenres([])).toBe("");
});

test("Function should return 'Action'", () => {
    expect(formatGenres(["Action"])).toBe("Action");
});

test("Function should return 'Action, Drama'", () => {
    expect(formatGenres(["Action", "Drama"])).toBe("Action, Drama");
});

test("Function should return 'Action, Drama, Comedy'", () => {
    expect(formatGenres(["Action", "Drama", "Comedy"])).toBe("Action, Drama, Comedy");
});