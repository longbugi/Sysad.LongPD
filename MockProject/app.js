const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Long Pham - webhook test!</h1>");
});

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
