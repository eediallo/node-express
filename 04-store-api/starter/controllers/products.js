import { productModel } from "../models/product.js";

const getAllProducts = async (req, res) => {
  try {
    const queryObject = {}; // send all products if search does not match
    const { feature, company, name, sort, fields } = req.query;

    if (feature) {
      queryObject.feature = feature === "true" ? true : false;
    }

    if (company) {
      queryObject.company = company;
    }

    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }

    // do this so that the sort can work. and use await afterwards
    let result = productModel.find(queryObject);

    // sort
    if (sort) {
      const sortList = sort.split(",").join(" ");
      result.sort(sortList);
    }
    result.sort("createdAt");

    // select fields
    if (fields) {
      const selectedFields = fields.split(",").join(" ");
      result.select(selectedFields);
    }

    // pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);

    const products = await result;
    res.status(200).json({ products, nbHits: products.length });
  } catch (err) {
    return res.status(404).json({ msg: "Product not found" });
  }
};

// for testing only
const getAllProductsStatic = async (req, res) => {
  try {
    const products = await productModel
      .find({price: {$lt: 30}})
      .sort("price")
      .select("name price")
      .limit(10)
      .skip(1);
    res.status(200).json({ products, nbHits: products.length });
  } catch (err) {
    return res.status(404).json({ msg: "Product not found" });
  }
};

export { getAllProducts, getAllProductsStatic };
