const express = require("express");
const MICROSERVICE_2_URL =
  process.env.MICROSERVICE_2_URL || "http://localhost:3001";

const app = express();

app.get("/ping", (req, res) => {
  res.send({ status: 200, message: "pong" });
});

app.get("/ping-ms-2", async (req, res) => {
  try {
    const response = await fetch(`${MICROSERVICE_2_URL}/ping`);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.send({ status: 500, message: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Microservice-1 is running on port 3000");
});
