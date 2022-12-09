import mongoose from "mongoose";
import validator from "validator";

const BooksSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: [true, "please provide title"],
    minlength: 1,
    maxlength: 50,
    trim: true,
  },
  detail: {
    type: String, 
    // required: [true, "please provide details"],
    minlength: 1,
    maxlength: 3000,
  },
  pengarang: {
    type: String,
    required: [true, "please provide author"],
    minlength: 1,
  },
  volume : {
    type: Number,
    min : 0,
    max: 500,
  },
  harga : {
    type : Number,
    min : 10,
    max : 100000000,
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
    // ref: "User",
    // required: [true, "Please provide owner"],
    // type: String,
    required: [true, "please provide owner"]
  },
});

export default mongoose.model("Book", BooksSchema);
