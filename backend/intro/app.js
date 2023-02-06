const express = require("express");
const fs = require("fs");
const cors = require("cors");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const app = express();
app.use(cors());
const port = 8000;

let article = JSON.parse(fs.readFileSync("articleData.json", "utf8"));

let categories = JSON.parse(fs.readFileSync("categoryData.json", "utf8"));

const updateCategoriesFile = () => {
  fs.writeFileSync("categoryData.json", JSON.stringify(categories));
};

let nextCatId = categories.length;
app.get("/", (request, response) => {
  response.status(200);
  response.json("dadasda");
});

app.get("/categories", (request, response) => {
  response.status(200);
  response.json(categories);
  updateCategoriesFile();
});

app.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  let category = null;
  for (const row of categories) {
    if (id == row.id) {
      category = row;
      break;
    }
  }
  updateCategoriesFile();
  res.json(category);
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  categories = categories.filter((row) => {
    row.id !== id;
    updateCategoriesFile();
    res.json(id);
  });
});

app.put("/categories/:id", jsonParser, (req, res) => {
  const { name } = req.body;
  const { description } = req.body;
  const { id } = req.params;

  let updateCat;
  categories = categories.map((row) => {
    console.log("aaa");
    if (row.id === Number(id)) {
      updateCat = { id: Number(id), name, description };
      return updateCat;
    }
    return row;
  });
  updateCategoriesFile();
  res.json(updateCat);
});

app.post("/categories", jsonParser, (req, res) => {
  const { name } = req.body;
  const newCategory = { id: nextCatId++, name, description };
  categories.push(newCategory);
  updateCategoriesFile();
  res.send(newCategory);
});

app.get("/article", (request, response) => {
  response.status(200);
  response.json(article);
});
app.get("/article/:id", (req, res) => {
  const { id } = req.params;
  res.json(article[Number(id) - 1]);
});

app.get("/generateNumbers", (req, res) => {
  res.json("done");
});

let products = JSON.parse(fs.readFileSync("MOCK_DATA.json", "utf-8"));
app.get("/products", (req, res) => {
  let { pageSize, page, q, priceTo, priceFrom, price } = req.query;
  pageSize = Number(pageSize) || 10;
  page = Number(page) || 1;
  let start, end;

  start = (page - 1) * pageSize;
  end = page * pageSize;

  const newProducts = products.filter((product) => {
    let matching = true;
    if (q) {
      matching = product.name.toLowerCase().includes(q.toLowerCase());
    }
    return matching;
  });
  const items = newProducts.slice(start, end);
  let numberTo = 2000;
  let numberFrom = 5000;
  price = products.filter((item) => {
    if (item.price >= numberTo) {
      if (item.price <= numberFrom) {
        return item;
      }
    }
  });

  res.json({
    total: newProducts.length,
    totalPages: Math.ceil(newProducts.length / pageSize),
    page,
    pageSize,
    price,
    items,
  });
});

let menuPositions = JSON.parse(fs.readFileSync("menuPositions.json", "utf-8"));
app.get("/menu-positions", (req, res) => {
  res.json(menuPositions);
});

app.get("/menu-positions/:id", (req, res) => {
  const { id } = req.params;
  let positions = null;
  for (const row of menuPositions) {
    if (id === row.id) {
      positions = row;
      break;
    }
  }
  res.json(positions);
});
let nextPosId = menuPositions.length + 1;

app.post("/menu-positions", jsonParser, (req, res) => {
  const { name, alias } = req.body;
  const newPosition = { id: nextPosId++, name, alias };
  menuPositions.push(newPosition);
  fs.writeFileSync("menuPositions.json", JSON.stringify(menuPositions));
  res.json(newPosition);
});

app.delete("/menu-positions/:id", (req, res) => {
  const { id } = req.params;
  menuPositions = menuPositions.filter((row) => row.id !== Number(id));
  fs.writeFileSync("menuPositions.json", JSON.stringify(menuPositions));
  res.json(id);
});

const menus = JSON.parse(fs.readFileSync("menus.json", "utf-8"));

app.get("/menus", (req, res) => {
  const { positionId } = req.query;
  if (!positionId) return res.statusCode(400).json("PositionId required");
  const result = menus.filter((menu) => {
    return menu.positionId === Number(positionId);
  });
  return res.json(result);
});

app.get("/menus/:positionAlias", (req, res) => {
  const { positionId } = req.params;
  let position = null;
  for (const row of menuPositions) {
    if (positionAlias == row.alias) {
      position = row;
      break;
    }
  }
  if (!position) return res.status(400).json("position not found");
  const result = menus.filter((menu) => {
    return menu.positionId === position.id;
  });
  return res.json(result);
});

app.post("/menus", jsonParser, (req, res) => {
  const { name, link, positionId, ordering, newTab } = req.body;
  const newMenu = { id: nextMenuId, name, link, newTab, positionId, ordering };
  menus = [...menus, newMenu];

  fs.writeFileSync("menus.json", JSON.stringify(menus));
  return res.json(newMenu);
});

app.delete("menus/:id", (req, res) => {
  const { id } = req.params;
  menus = menus.filter((row) => row.id !== number(id));
  fs.writeFileSync("menus.json", JSON.stringify(menus));
  res.json(id);
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
