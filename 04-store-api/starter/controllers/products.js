import { productModel } from "../models/product.js";

const getAllProducts = async (req, res) => {
  try {
    const queryObject = {}; // send all products if search does not match
    const { feature, company, name } = req.query;

    if (feature) {
      queryObject.feature = feature === "true" ? true : false;
    }

    if (company) {
      queryObject.company = company;
    }

    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }

    console.log(queryObject);
    const products = await productModel.find(queryObject);
    res.status(200).json({ products, nbHits: products.length });
  } catch (err) {
    return res.status(404).json({ msg: "Product not found" });
  }
};

// for testing only
const getAllProductsStatic = async (req, res) => {
  try {
    const products = await productModel.find({}).sort('-name');
    res
      .status(200)
      .json({ products, nbHits: products.length });
  } catch (err) {
    return res.status(404).json({ msg: "Product not found" });
  }
};

export { getAllProducts, getAllProductsStatic };
