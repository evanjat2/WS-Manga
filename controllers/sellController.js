import User from "../models/Book.js";
import { StatusCodes } from "http-status-codes";
const inputBook = async (req, res) => {
  const Book = await Book.create(req.body);
  res.status(StatusCodes.CREATED).json({ Book });
};
const searchBook = (req, res) =>{
    
};
const updateBook = (req, res) => {
  res.send("update book");
};
const deleteBook =(req, res) =>{

}
;

export { register, login, updateUser };
