import express from "express"
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req: any, res: any) => {
  const products = await Product.find();
  res.json(products);
});

// GET all products
router.get("/:id", async (req: any, res: any) => {
  const products = await Product.findById(req.params.id);
  res.json(products);
});

// ADD a new product
router.post("/newproduct", async (req: any, res: any) => {
  const { name, description, image, price } = req.body;
  const product = new Product({ name, description, image, price });
  await product.save();
  res.json({ status: "product Saved" });
});

// UPDATE a new product
router.put("/:id", async (req: any, res: any) => {
  const { name, description, image, price } = req.body;
  const newproduct = { name, description, image, price };
  await Product.findByIdAndUpdate(req.params.id, newproduct);
  res.json({ status: "Product Updated" });
});

router.delete("/:id", async (req: any, res: any) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({ status: "Product Deleted" });
});

module.exports = router;
