import mongoose from "mongoose";
import validator from "validator";

const BooksSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: [true, "please provide title"],
    minlength: 3,
    maxlength: 50,
    trim: true,
  },
  detail: {
    type: String, 
    required: [true, "please provide details"],
    minlength: 15,
    maxlength: 3000,
  },
  pengarang: {
    type: String,
    required: [true, "please provide author"],
    minlength: 6,
  },
  urlGambar: {
    type: String,
    required: [true, "please provide picture"]
  },
  istoSell: {
    type: Boolean,
    default: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide owner"],
  },
});

export default mongoose.model("Book", BooksSchema);
