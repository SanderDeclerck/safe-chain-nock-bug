const axios = require("axios");

axios.get("https://httpbin.org/status/200").then((response) => {
  console.log(response.status);
});
