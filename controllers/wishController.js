import Wish from "../models/Book.js";
import { StatusCodes } from "http-status-codes";

const postWish = async (req, res) => {
  try{
    const wish = await Wish.create({...req.body, istoSell: false});
    res.status(StatusCodes.CREATED).json({ wish });
  } catch(e) {
    res.send(e.message)
  }
  
};

const getWishes = async (req, res) => {
  const wishes = await Wish.find()
  res.send(wishes)
};

const getOneWish = async (req, res) => {
  const oneWish = await Wish.findById(re.params.id);

  res.send(oneWish)
};

const deleteWish = async (req, res) => {
    let wishDelete = await Wish.findByIdAndDelete(req.params.id)
    res.send(`Deleted wish with ${req.params.id}`)
}

const updateWish = (req, res) => {
    const { id } = req.params
    const { judul, pengarang, penerbit, jumlahHalaman, tahunTerbit} = req.body

    const wish = Wish.findById(id)

    if (judul) wish.judul = judul
    if (pengarang) wish.pengarang = pengarang
    if (penerbit) wish.penerbit = penerbit
    if (jumlahHalaman) wish.jumlahHalaman = jumlahHalaman
    if (tahunTerbit) wish.tahunTerbit = tahunTerbit

    wish.save()

    res.send(`User with ID ${id} has been updated`)
}

export { getWishes, postWish, getOneWish, deleteWish, updateWish };
