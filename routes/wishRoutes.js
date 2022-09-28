import express from "express";
const router = express.Router();

import { getWishes, postWish, getOneWish, updateWish, deleteWish } from "../controllers/wishController.js";

router.route("/").get(getWishes).post(postWish);
router.route("/:id").get(getOneWish).patch(updateWish).delete(deleteWish);


export default router;