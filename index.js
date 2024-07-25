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

app.get("/lieux/:id", (req, res) => {
  const lieuxId = parseInt(req.params.id);
  const lieux = tabLieux.find((elem) => elem.id === lieuxId);
  res.json(lieux);
});

app.get("/potions", (req, res) => {
  res.json(tabPotions);
});

app.get("/potion/:id", (req, res) => {
  const potionId = parseInt(req.params.id);
  const potion = tabPotions.find((elem) => elem.id === potionId);
  res.json(potion);
});

app.listen(serverPort, () => {
  console.info(`http://localhost:4242`);
});
