import supertest from "supertest";

import app from "../app";

describe("Given App", () => {
  test.each([
    {
      api: "/guardian/lifeandstyle",
      expected: true,
      status: 200,
    },
    {
      api: "/something/lifeandstyle",
      expected: false,
      status: 400,
    },
    {
      api: "/guardian/PascalCase",
      expected: false,
      status: 400,
    },
    {
      api: "/guardian/politics",
      expected: true,
      status: 200,
    },
  ])("When api $api is called, status = $status is returned", async ({ api, status, expected }) => {
    if (expected) {
      await supertest(app)
        .get(api)
        .expect(status)
        .then((response) => {
          expect(response.header["content-type"]).toBe("text/xml; charset=utf-8");

          expect(response.text.includes("xml")).toBeTruthy();
        });
    } else {
      await supertest(app).get(api).expect(status);
    }
  });
});
