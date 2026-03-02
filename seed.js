import mongoose from "mongoose";
import dotenv from "dotenv";
import { category as Category } from "./models/category.js";
import { products as Product } from "./models/products.js";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const categories = [
  {
    name: "Topwear",
    discription: "Stylish tops and shirts",
    url: "/models/1.avif",
  },
  {
    name: "Bottomwear",
    discription: "Comfortable pants and skirts",
    url: "/models/7.avif",
  },
  {
    name: "Accessories",
    discription: "Essential fashion accessories",
    url: "/models/16.avif",
  },
  {
    name: "New Arrivals",
    discription: "Latest fashion trends",
    url: "/models/9.avif",
  },
];

const products = [
  {
    name: "SKIN LONG SLEEVE",
    price: 45.0,
    category_id: "Topwear",
    discription: "A comfortable and stylish long sleeve skin-fit top.",
    url: "/models/10.avif",
    public_id: "prod_1",
  },
  {
    name: "HONGOR UNISEX DRESS",
    price: 125.0,
    category_id: "Topwear",
    discription: "Elegant unisex dress for all occasions.",
    url: "/models/11.avif",
    public_id: "prod_2",
  },
  {
    name: "DOROTA TANK TOP",
    price: 65.0,
    category_id: "Topwear",
    discription: "Lightweight tank top for summer days.",
    url: "/models/12.avif",
    public_id: "prod_3",
  },
  {
    name: "STEVE BLACK",
    price: 78.0,
    category_id: "Bottomwear",
    discription: "Classic black pants with a modern fit.",
    url: "/models/6.avif",
    public_id: "prod_4",
  },
  {
    name: "KOTTI PANT",
    price: 100.97,
    category_id: "Bottomwear",
    discription: "Premium quality pants for everyday wear.",
    url: "/models/7.avif",
    public_id: "prod_5",
  },
  {
    name: "MESH BLAZER",
    price: 150.0,
    category_id: "Topwear",
    discription: "Modern mesh blazer for a bold look.",
    url: "/models/4.avif",
    public_id: "prod_6",
  },
  {
    name: "URBAN JACKET",
    price: 95.0,
    category_id: "Topwear",
    discription: "Versatile jacket for urban exploration.",
    url: "/models/13.avif",
    public_id: "prod_7",
  },
  {
    name: "SILK SCARF",
    price: 35.0,
    category_id: "Accessories",
    discription: "Luxurious silk scarf to complement any outfit.",
    url: "/models/14.avif",
    public_id: "prod_8",
  },
  {
    name: "LEATHER BELT",
    price: 55.0,
    category_id: "Accessories",
    discription: "Genuine leather belt with a minimalist buckle.",
    url: "/models/15.avif",
    public_id: "prod_9",
  },
  {
    name: "FLORAL MAXI DRESS",
    price: 110.0,
    category_id: "New Arrivals",
    discription: "Beautiful floral maxi dress for spring.",
    url: "/models/8.avif",
    public_id: "prod_10",
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB for seeding...");

    // Clear existing data (optional, but good for demo)
    await Category.deleteMany({});
    await Product.deleteMany({});
    console.log("Cleared existing categories and products.");

    // Insert categories first
    const createdCategories = await Category.insertMany(categories);
    console.log(`Inserted ${createdCategories.length} categories.`);

    // Insert products
    const createdProducts = await Product.insertMany(products);
    console.log(`Inserted ${createdProducts.length} products.`);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
  }
}

seedDatabase();
