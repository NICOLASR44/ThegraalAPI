const express = require("express");

const app = express();

const serverPort = 4242;

const tabLieux = [
  {
    id: 1,
    nom: "Camelot",
    description:
      "La légendaire forteresse du Roi Arthur, centre de la Table Ronde. Tu y trouveras toutes les armes dont tu aura besoin",
    image:
      "https://static.wikia.nocookie.net/onceuponatime/images/2/26/5x01_ch%C3%A2teau_Camelot.png/revision/latest?cb=20180929143814&path-prefix=fr",
  },
  {
    id: 2,
    nom: "Auberge Avalon",
    description:
      "Auberge sur l'île mystique où Excalibur a été forgée et où Arthur a été emmené après sa dernière bataille.",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/ee/12.jpg",
  },
  {
    id: 3,
    nom: "Tentes Burgondes de Tintagel",
    description: "Ce fameux endroit te permettra d'arroser tranquilement les poissons .",
    image: "https://www.nicolaswaravka.com/wp-content/uploads/2020/09/Tintagel-Castle-2500.jpg",
  },
  {
    id: 4,
    nom: "Quête du Graal",
    description:
      "La quête mythique entreprise par les chevaliers de la Table Ronde pour trouver le Saint Graal, une coupe sacrée qui apporterait l'illumination divine et la guérison à ceux qui la possèdent.",
    image: "https://www.buzzwebzine.fr/wp-content/uploads/2023/02/saint-graal-1024x576.jpg",
  },
];

const Tabpotions = [
  {
    id: 1,
    nom: "Potion de Guérison",
    description: "Une potion qui guérit toutes les blessures et maladies.",
    image: "https://ih1.redbubble.net/image.739507788.6254/raf,360x360,075,t,fafafa:ca443f4786.u3.jpg",
  },
  {
    id: 2,
    nom: "Potion de Force",
    description: "Une potion qui donne une force surhumaine pendant une durée limitée.",
    image: "https://www.arsenevalentin.com/13294-large_default/potion-panoramix-50ml-tribal-force.jpg",
  },
  {
    id: 3,
    nom: "Potion d'Invisibilité",
    description: "Une potion qui rend invisible celui qui la boit.",
    image:
      "https://static.wikia.nocookie.net/barovia/images/3/36/Potion_d%27invisibilit%C3%A9.jpg/revision/latest?cb=20180215192440&path-prefix=fr",
  },
  {
    id: 4,
    nom: "Potion de Sagesse",
    description: "Une potion qui donne une sagesse infinie et la capacité de voir l'avenir.",
    image: "https://img.freepik.com/vecteurs-premium/flacon-potion-fiole-elixir-feuilles-branches_8071-7370.jpg",
  },
];

app.get("/lieux", (req, res) => {
  res.json(tabLieux);
});

app.get("/potions", (req, res) => {
  res.json(Tabpotions);
});

app.listen(serverPort, () => {
  console.info(`http://localhost:4242`);
});
