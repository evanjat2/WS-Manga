import Book from "../models/Book.js";
import { StatusCodes } from "http-status-codes";

const postBook = async (req, res) => {
  const book = await Book.create({...req.body});
  res.status(StatusCodes.CREATED).json({ book });
};

const getBook = async (req,res) =>{
  const book = await Book.find()
  res.send(Book)
}

const updateBook = (req, res) => {
  res.send("update book");
};

const deleteBook = async (req, res) => {
  let bookDelete = await Book.findByIdAndDelete(req.params.id)
  res.send(`Deleted book with ${req.params.id}`)
};

const getOneBook = async (req, res) => {
  const oneBook = await Book.findById(re.params.id);
  res.send(oneBook)
};
export { postBook, getBook, updateBook, deleteBook, getOneBook };
