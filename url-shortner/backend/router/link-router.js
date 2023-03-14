import express from "express";
import { shorten, isValidURL } from "../services/link-service.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("hello");
});

router.post("/", async (req, res) => {
  const { url } = req.body;
  if (isValidURL(url)) res.json(await shorten);
  else res.status(400).json("invalid URL");
});

export default router;
