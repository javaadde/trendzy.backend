import express from "express";
import {
  productByCategory,
  productsHome,
  searchProducts,
  productById,
} from "../controllers/products.js"; // ControllerS

// ==============================================================

export const productsRouter = express.Router();

// Routes =>

// get all products
productsRouter.get("/", productsHome);

// get single product
productsRouter.get("/get/:id", productById);

// get by category
productsRouter.get("/:category", productByCategory);

// get all by search query
productsRouter.post("/search", searchProducts);
