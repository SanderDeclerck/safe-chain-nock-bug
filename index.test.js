const { fetchData } = require(".");

describe("HTTP request test", () => {
  test("without nock", async () => {
    const result = await fetchData();

    expect(result).toBe(200);
  }, 20000);

  test("with nock", async () => {
    const nock = require("nock");
    nock.disableNetConnect();
    nock("https://postman-echo.com").get("/get").reply(200);

    const result = await fetchData();

    expect(result).toBe(200);
  }, 20000);
});
