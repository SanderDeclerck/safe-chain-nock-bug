async function fetchData() {
  const axios = require("axios");

  const response = await axios.get("https://postman-echo.com/get");

  return response.status;
}

module.exports = { fetchData };
