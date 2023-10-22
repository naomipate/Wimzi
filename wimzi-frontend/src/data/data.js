const { v4: uuidv4 } = require("uuid");
let listObjs = [
  { id: uuidv4(), item: "watercolor brushes", date: "2023-12-25" },
  { id: uuidv4(), item: "watercolor pencils", date: "2023-12-25" },
  { id: uuidv4(), item: "acrylic paint", date: "2023-12-27" },
  { id: uuidv4(), item: "pallette knife", date: "2023-12-27" },
  { id: uuidv4(), item: "canvas", date: "2023-12-27" },
];

module.exports = listObjs;
