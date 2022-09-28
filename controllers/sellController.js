import Book from "../models/Book.js";
import { StatusCodes } from "http-status-codes";

const postBook = async (req, res) => {
  const book = await Book.create({...req.body});
  res.status(StatusCodes.CREATED).json({ book });
};
const getBook = (req,res) =>{
  res.send("All the books")
}


const updateBook = (req, res) => {
  res.send("update book");
};
const deleteBook = (req, res) => {

};
const getOneBook = (req, res) => {

};
export { postBook, getBook, updateBook, deleteBook, getOneBook };
