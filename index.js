async function fetchData() {
  const axios = require("axios");
  const response = await axios.get("https://httpbin.org/status/200");
  return response.status;
}

module.exports = { fetchData };
