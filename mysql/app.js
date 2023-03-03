import express, { json } from "express";
import cors from "cors";
import categoryRouter from "./routes/category-router.js";
import productRouter from "./routes/product-router.js";

const app = express();

app.use(cors());
app.use(json());
app.use("/categories", categoryRouter);
app.use("/product", productRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
