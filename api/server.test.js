const request = require("supertest");

const server = require("./server.js");

describe("server", () => {
  it("Check for testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
