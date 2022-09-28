import Wish from "../models/Book.js";
import { StatusCodes } from "http-status-codes";

const postWish = async (req, res) => {
  
  const wish = await Wish.create({...req.body, istoSell: false});
  res.status(StatusCodes.CREATED).json({ wish });
};

const getWishes = (req, res) => {
  res.send("All the wishes");
};

const getOneWish = (req, res) => {
  res.send(`Get Wish with ID ${req.params.id}`);
};

const deleteWish = (req, res) => {
    res.send(`Delete Wish with ID ${req.params.id}`)
}

const updateWish = (req, res) => {
    const id = req.params.id
    const { judul, pengarang} = req.body

    // const wish = wishes.find((wish) => wish.id === id)

    // if (judul) wish.judul = judul
    // if (pengarang) wish.pengarang = pengarang
    // await wish.save()

    // res.send(`User with ID ${id} has been updated`)
}

export { getWishes, postWish, getOneWish, deleteWish, updateWish };
