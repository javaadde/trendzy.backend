import {
  findAllProducts,
  findCategoryProducts,
  searchWithQuery,
  findSingleProduct,
} from "../services/products.js";

export async function productsHome(req, res) {
  try {
    const allproducts = await findAllProducts();
    res.json(allproducts);
  } catch (error) {
    console.log(error);
  }
}

export async function productByCategory(req, res) {
  try {
    const category = req.params.category;
    const categoryProducts = await findCategoryProducts(category);
    res.json(categoryProducts);
  } catch (error) {
    console.log(error);
  }
}

export async function searchProducts(req, res) {
  console.log(req.method);

  try {
    const searchQuery = req.query.name;

    const data = await searchWithQuery(searchQuery);

    res.json(data);
  } catch (error) {
    console.log(error);
  }
}

export async function productById(req, res) {
  try {
    const id = req.params.id;
    const product = await findSingleProduct(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
