import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
    trim: true,
  },
  feature: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
    // enum: ["ikea", "liddy", "caressa", "marcos"],
    required: [true, "company must be provided"],
    trim: true,
  },
});

export const productModel = mongoose.model("Product", productSchema);
