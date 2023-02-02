const { request, response } = require("express");
const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const app = express();
app.use(cors());
const port = 8000;
const fs = require("fs");

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

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
