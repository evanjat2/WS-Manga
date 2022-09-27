import mongoose from "mongoose";
import validator from "validator";

const BooksSchema = new mongoose.Schema({
    judul: {
      type: String,
      required: [true, "please provide title"],
      minlength: 3,
      maxlength: 50,
      trim: true
    },
    penerbit: {
      type: String
    },
    pengarang: {
      type: String,
      required: [true, "please provide author"],
      minlength: 6
    },
    jumlahHalaman: {
        type: Number,
        min: 0
    },
    tahunTerbit: {
      type: Number,
      trim: true,
      min: 1850
    },
    istoSell:{
        type: Boolean,
        default: true
    },
  });

  export default mongoose.model("Book",BooksSchema);