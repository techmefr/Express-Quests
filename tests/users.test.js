const request = require("supertest");
const database = require("../database");

const app = require("../src/app");

describe("GET /api/users", () => {
  it("should return all users", async () => {
    const response = await request(app).get("/api/users");

    expect(response.headers["content-type"]).toMatch(/json/);

    expect(response.status).toEqual(200);
  });
});

describe("GET /api/users/:id", () => {
  it("should return one user", async () => {
    const response = await request(app).get("/api/users/1");

    expect(response.headers["content-type"]).toMatch(/json/);

    expect(response.status).toEqual(200);
  });

  it("should return no user", async () => {
    const response = await request(app).get("/api/users/0");

    expect(response.status).toEqual(404);
  });
});
const crypto = require("crypto");

describe("POST /api/users", () => {
  it("should return created user with all properties", async () => {
    const newUser = {
      firstname: "Marie",
      lastname: "Martin",
      email: `${crypto.randomUUID()}@wild.co`,
      city: "Paris",
      language: "French",
    };

    const response = await request(app).post("/api/users").send(newUser);

    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty("id");
    expect(typeof response.body.id).toBe("number");

    const userInDatabase = await getUserFromDatabase(response.body.id);
    expect(userInDatabase).not.toBeNull();
    expect(userInDatabase).toMatchObject(newUser);
  });

  it("should return an error for a user with missing properties", async () => {
    const userWithMissingProps = { firstname: "John" };

    const response = await request(app)
      .post("/api/users")
      .send(userWithMissingProps);

    expect(response.status).toEqual(500);
  });
});

async function getUserFromDatabase(userId) {
  const [result] = await database.query(
    "SELECT * FROM users WHERE id=?",
    userId
  );
  return result[0];
}
