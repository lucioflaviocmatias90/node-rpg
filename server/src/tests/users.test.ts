import request from "supertest";
import app from "../app";

describe("Users testing...", () => {
  it("get current user", async (done) => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
    done();
  });

  it("create a new user", (done) => {
    request(app)
      .post("/users")
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });
});
