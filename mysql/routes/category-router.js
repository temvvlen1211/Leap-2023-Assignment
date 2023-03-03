import express from "express";
import {
  createCategory,
  deleteCategory,
  updateCategory,
  getCategories,
  getOnOfCategory,
} from "../services/category-services.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getCategories());
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.json(await getOnOfCategory(id));
  } catch (err) {
    res.status("avahad aldaa garlaa");
  }
});
router.post("/", async (req, res) => {
  const { name, slug, imageUrl } = req.body;
  try {
    res.json(await createCategory(name, slug, imageUrl));
  } catch (err) {
    res.status(400).json("nemehed aldaa");
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.json(await deleteCategory(id));
  } catch (err) {
    res.status(400).json("Ustgahad aldaa garlaa");
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, slug, imageUrl } = req.body;
  try {
    res.json(await updateCategory(name, slug, imageUrl, id));
  } catch (err) {
    res.status(400).json("update hiihed aldaa garlaa");
  }
});
export default router;
