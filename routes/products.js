import express from "express";
import { productByCategory, productsHome, searchProducts } from "../controllers/products.js"; // ControllerS

// ==============================================================

export const productsRouter = express.Router();

// Routes =>

// get all products
productsRouter.get("/", productsHome);

// get by category
productsRouter.get("/:category", productByCategory);

// get all by search query
productsRouter.post("/search", searchProducts);
