const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.listen(() => {
  console.log(`User Service is running on ${PORT}`);
});
