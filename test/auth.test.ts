import { afterAll, beforeAll, beforeEach, describe, expect, test } from "@jest/globals";
import request from "supertest";
import app from "../app";
import mongoose from "mongoose";

beforeAll(async () => {
    await mongoose.connect(`${process.env.LOCAL_MONGODB_URI}`); //connect to the database before each test
});
afterAll(async () => {
    await mongoose.connection.close(); //stop the connection after all test and stop tests leaking due to improper teardown
});
describe("Auth", () => {
    const user = {
        username: "test",
        password: "test",
    };
    test("should return 200", async () => {
        const response = await request(app).post("/api/register").send(user).set("Accept", "application/json").set("Content-Type", "application/json");
        expect(response.status).toBe(200);
        expect(JSON.parse(response.text)).toBe("Register success!");
    });
    test("should return 200", async () => {
        const response = await request(app).post("/signIn").send(user).set("Accept", "application/json").set("Content-Type", "application/json");
        expect(response.status).toBe(200);
        // expect(response.text).toEqual("Sign in success!");
    });
});
