async function fetchData() {
  const axios = require("axios");

  const response = await axios.get("https://example.com/");

  return response.status;
}

module.exports = { fetchData };
