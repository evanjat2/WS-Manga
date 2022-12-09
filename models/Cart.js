import mongoose from "mongoose";
import validator from "validator";

const CartsSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: [true, "please provide author"],
    minlength: 1,
  },
  buyerID: {
    type: String,
    required: [true, "please provide author"],
    minlength: 1,
  },
});

export default mongoose.model("Cart", CartsSchema);
