import Wish from "../models/Book.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";

const postWish = async (req, res) => {
  const { judul, pengarang, volume } = req.body;

  if (!judul || !pengarang || !volume) {
    throw new BadRequestError("Harap isi judul, volume, dan pengarang");
  }
  req.body.owner = req.user.userId;
  const wish = await Wish.create({...req.body, istoSell: false});
  res.status(StatusCodes.CREATED).json({ wish });
};

const getOwnWishes = async (req, res) => {
  const wishes = await Wish.find({ owner: req.user.userId, istoSell: false });
  res.status(StatusCodes.OK).json({ wishes, totalWishes: wishes.length });
};

const getWishes = async (req, res) => {
  const wishes = await Wish.find({istoSell : false})
  res.status(StatusCodes.OK).json({ wishes, totalWishes: wishes.length })
};

const getOneWish = async (req, res) => {
  const wishId = req.params.id
  const oneWish = await Wish.findById(wishId);
  res.send(oneWish)
};

const deleteWish = async (req, res) => {
  const {id: wishId} = req.params
  const wish = await Wish.findOne({ _id: wishId });

  if (!wish) {
    throw new NotFoundError(`Item wishlist yang ada maksud tidak ditemukan`);
  }

  if (req.user.userId !== wish.owner.toString()) {
    throw new UnAuthenticatedError("Ini bukan item wishlist milik Anda");
  }

  await wish.remove();

  res.status(StatusCodes.OK).json({ msg: "Sukses! Item wishlist telah dihapus" })
}

const updateWish = async (req, res) => {
    const { id } = req.params
    const { judul, pengarang, detail, volume, urlGambar} = req.body

    const wish = await Wish.findById(id)
    if (!wish) {
      throw new NotFoundError(`Item wishlist tidak ditemukan`);
    }

    if (judul) wish.judul = judul
    if (pengarang) wish.pengarang = pengarang
    if (detail) wish.detail = detail
    if (volume) wish.volume = volume
    if (urlGambar) wish.urlGambar = urlGambar

    if (req.user.userId !== wish.owner.toString()) {
      throw new UnAuthenticatedError("Ini bukan item wishlist milik Anda");
    }
    wish.save()

    res.send(`Item wishlist berhasil di-update`)
}

export { getWishes, getOwnWishes, postWish, getOneWish, deleteWish, updateWish };
