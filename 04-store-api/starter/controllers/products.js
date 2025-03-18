import { productModel } from "../models/product.js";

const getAllProducts = async (req, res) => {
    console.log(req.query)
  try {
    const products = await productModel.find(req.query);
    res
      .status(200)
      .json({ products, nbHits: products.length });
  } catch (err) {
    return res.status(404).json({ msg: "Product not found" });
  }
};

// for testing only
const getAllProductsStatic = async (req, res) => {
  try {
    const woodenDeskProducts = await productModel.find({ name: "wooden desk" });
    res
      .status(200)
      .json({ woodenDeskProducts, nbHits: woodenDeskProducts.length });
  } catch (err) {
    return res.status(404).json({ msg: "Product not found" });
  }
};

export { getAllProducts, getAllProductsStatic };
