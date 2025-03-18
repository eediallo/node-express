import { productModel } from "../models/product.js";

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products route" });
};
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
