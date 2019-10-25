const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./api");

const app = express();
const server = http.Server(app);

app.use(bodyParser.json());
app.use("/api", apiRouter);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Server now listening on port ${port}`);
});
