import Cart from "../models/Cart.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import UnAuthenticatedError from "../errors/unauthenticated.js";
import NotFoundError from "../errors/not-found.js";

const createCart = async (req, res) => {
  const { productID, buyerID } = req.body;

  if (!productID || !buyerID) {
    throw new BadRequestError("Please provide all values");
  }

  const cartAlreadyExist = await Cart.findOne({ productID, buyerID });
  if (cartAlreadyExist) {
    throw new BadRequestError("Cart already been added");
  }
  const cart = await Cart.create({
    productID,
    buyerID,
  });
  res.status(StatusCodes.CREATED).json({ cart });
};

const checkCart = async (req, res) => {
  const { productID, buyerID } = req.body;

  const cart = await Cart.find({ productID: productID, buyerID: buyerID });
  res.status(StatusCodes.OK).json({ cart, totalCarts: cart.length });
};

export { createCart, checkCart };
