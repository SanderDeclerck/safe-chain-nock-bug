const axios = require("axios");
const nock = require("nock");
const { fetchData } = require(".");

// axios.defaults.adapter = "http";
// nock.disableNetConnect();

// delete process.env.HTTP_PROXY;
// delete process.env.HTTPS_PROXY;

describe("HTTP request test", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  test("should make a GET request to httpbin and return status 200", async () => {
    // Mock the HTTP request

    // const scope = nock("https://httpbin.org").get("/status/200").reply(200);

    const result = await fetchData();

    expect(scope.isDone()).toBe(true);
    expect(result).toBe(200);
  });
});
