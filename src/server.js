const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

let users = {
  1: {
    id: "1",
    username: "Robin Wieruch",
  },
  2: {
    id: "2",
    username: "Dave Davids",
  },
};

app.get("/", (_req, res) => {
  return res.send("Received a GET HTTP method");
});

app.post("/", (_req, res) => {
  return res.send("Received a POST HTTP method");
});

app.put("/", (_req, res) => {
  return res.send("Received a PUT HTTP method");
});

app.delete("/", (_req, res) => {
  return res.send("Received a DELETE HTTP method");
});

app.get("/users", (_req, res) => {
  return res.send(Object.values(users));
});

app.get("/users/:userId", (req, res) => {
  return res.send(users[req.params.userId]);
});

http = require("http").createServer(app);
http.listen(port);

module.exports = http;
