const nock = require("nock");
const { fetchData } = require(".");

describe("HTTP request test", () => {
  test("should make a GET request to httpbin and return status 200", async () => {
    nock.disableNetConnect();
    nock("https://httpbin.org").get("/status/200").reply(200);

    const result = await fetchData();

    expect(result).toBe(200);
  }, 20000);
});
