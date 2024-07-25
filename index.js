const express = require("express");
const cors = require("cors");
const tabLieux = require("./lieux.js");
const tabPotions = require("./potions.js");
const app = express();

const serverPort = 4242;

app.use(cors("*"));

app.get("/lieux", (req, res) => {
  res.json(tabLieux);
});

app.get("/potions", (req, res) => {
  res.json(tabPotions);
});

app.listen(serverPort, () => {
  console.info(`http://localhost:4242`);
});
