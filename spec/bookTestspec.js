let request = require("request");

const baseURL = "http://localhost:3034/books/";

console.log("Starting bookTestspec.js");

describe("Test server for Books", () => {
    describe("GET /team", () => {
        it("returns Team Name & Members", (done) => {
            request.get(baseURL+"team", (err, resp, body) => {
                teamData = JSON.parse(body);
                // expect(teamData.team).toBe("team09-laptops");
                expect(teamData["member 2"]).toBe("Kritika M Pai");
                done();
            });
        });
    });

    describe("GET /all/**", () => {
        it("returns regular prices of the laptops", (done) => {
            request.get(baseURL+"all", (err, resp, body) => {
                bookData = JSON.parse(body);
                expect(bookData[0].Title).toBe("Lord of the Rings");
                expect(bookData[0].price).toBe(25.99);
                done();
            });
        });
    });

    describe("GET /all/durham", () => {
        it("returns book prices after a 8% sales-tax addition", (done) => {
            request.get(baseURL+"all/durham", (err, resp, body) => {
                bookData = JSON.parse(body);
                expect(bookData[0].Title).toBe("Lord of the Rings");
                expect(bookData[0].price).toBe(28.0692);
                done();
            });
        });
    });

    describe("GET /all/raleigh", () => {
        it("returns book prices after an 7.5% sales-tax addition", (done) => {
            request.get(baseURL+"all/raleigh", (err, resp, body) => {
                bookData = JSON.parse(body);
                expect(bookData[0].Title).toBe("Lord of the Rings");
                expect(bookData[0].price).toBe(27.939249999999998);
                done();
            });
        });
    });
});