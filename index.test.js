const axios = require("axios");
const nock = require("nock");

axios.defaults.adapter = "http";
nock.disableNetConnect();

describe("HTTP request test", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  test("should make a GET request to httpbin and return status 200", async () => {
    // Mock the HTTP request
    const scope = nock("https://httpbin.org").get("/status/200").reply(200);

    const response = await axios.get("https://httpbin.org/status/200");

    expect(scope.isDone()).toBe(true);
    expect(response.status).toBe(200);
  });
});
