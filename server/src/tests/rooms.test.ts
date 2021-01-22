/* eslint-disable no-undef */
import "../utils/env";
import request from "supertest";
import app from "../app";
import { UserFactory } from "../database/UserFactory";
import { User } from "../app/models/User";
import { Room } from "../app/models/Room";
import Database from "../database/connection";
import Auth from "../app/services/Auth";

const database = Database.getInstance();

beforeAll(async () => {
  await database.connect();
});

afterAll(async () => {
  await database.disconnect();
});

beforeEach(async () => {
  await database.clear();
});

describe("GET /rooms", () => {
  it("should to list all available rooms", async () => {
    const newUser = await createUser();
    const token = new Auth().sign(newUser.id);

    const response = await request(app)
      .get("/rooms")
      .set("Authorization", `bearer ${token}`);

    const { list } = response.body;

    expect(list).toEqual([]);
  });
});

describe("POST /rooms", () => {
  it("should error when not sending required request body", async () => {
    const newUser = await createUser();
    const token = new Auth().sign(newUser.id);

    const response = await request(app)
      .post("/rooms")
      .set("Authorization", `bearer ${token}`)
      .send({});

    const { errors } = response.body;

    expect(errors).toEqual([
      { msg: "Invalid value", param: "name", location: "body" },
    ]);
  });
});

const createUser = async () => {
  const userRepository = database.connection.getRepository(User);
  const userData = new UserFactory().make();

  const user = userRepository.create({
    name: userData.name,
    password: "123123",
    email: userData.email,
    gender: userData.gender,
    birthday: userData.birthday,
  });

  return await userRepository.save(user);
};
