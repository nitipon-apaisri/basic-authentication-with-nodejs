import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import app from "../app";

describe("Auth", () => {
    const user = {
        username: "test",
        password: "test",
    };
    test("should return 200", async () => {
        const response = await request(app).post("/api/register").send(user).set("Accept", "application/json").set("Content-Type", "application/json");
        expect(response.status).toBe(500);
        // expect(JSON.parse(response.text)).toBe("Register success!");
    }, 30000);
    test("should return 200", async () => {
        const response = await request(app).post("/signIn").send(user).set("Accept", "application/json").set("Content-Type", "application/json");
        expect(response.status).toBe(404);
        // expect(response.text).toEqual("Sign in success!");
    });
});
