import request from "supertest";
import app from "../app";

describe("Users testing...", () => {
  test("get current user", async (done) => {
    const { status } = await request(app).get("/users");
    expect(status).toBe(200);
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
