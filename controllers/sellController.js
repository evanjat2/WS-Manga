import Book from "../models/Book.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import UnAuthenticatedError from "../errors/unauthenticated.js";
import NotFoundError from "../errors/not-found.js";

const postBook = async (req, res) => {
  const { judul, pengarang, detail, urlGambar, owner } = req.body;

  if (!judul || !pengarang || !detail || !urlGambar) {
    throw new BadRequestError("Please provide all values");
  }
  const book = await Book.create({
    judul,
    pengarang,
    detail,
    urlGambar,
    owner,
  });
  res.status(StatusCodes.CREATED).json({ book });
};

const getOwnedBook = async (req, res) => {
  const book = await Book.find({ owner: req.user.userId, istoSell: true });
  res.status(StatusCodes.OK).json({ book, totalBooks: book.length });
};

const getBook = async (req, res) => {
  const book = await Book.find({ istoSell: true });
  res.status(StatusCodes.OK).json({ book, totalBooks: book.length });
};

const updateBook = async (req, res) => {
  const { id: bookId } = req.params;
  const { judul, pengarang, detail, urlGambar } = req.body;
  if (!judul || !pengarang || !detail || !urlGambar) {
    throw new BadRequestError("Please provide all value");
  }

  const book = await Book.findOne({ _id: bookId, istoSell: true });

  if (!book) {
    throw new NotFoundError(`No book with id :${bookId}`);
  }

  book.judul = judul;
  book.pengarang = pengarang;
  book.detail = detail;
  book.urlGambar = urlGambar;

  if (req.user.userId !== book.owner.toString()) {
    throw new UnAuthenticatedError("Ini bukan buku yang anda jual");
  }
  await book.save();
  res.status(StatusCodes.OK).json({ book });
};

const deleteBook = async (req, res) => {
  const { id: bookId } = req.params;

  const book = await Book.findOne({ _id: bookId, istoSell: true });

  if (!book) {
    throw new NotFoundError(`No book with id :${bookId}`);
  }

  if (req.user.userId !== book.owner.toString()) {
    throw new UnAuthenticatedError("Ini bukan buku yang anda jual");
  }

  await book.remove();

  res.status(StatusCodes.OK).json({ msg: "Sukses! Buku telah dihapus" });
};

const getOneBook = async (req, res) => {
  const oneBook = await Book.findOne({ _id: req.params.id });
  res.send(oneBook);
};
export { postBook, getBook, updateBook, deleteBook, getOneBook, getOwnedBook };
