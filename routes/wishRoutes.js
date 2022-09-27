import express from "express";
const router = express.Router();

import { getWish, postWish, getOneWish, updateWish, deleteWish } from "../controllers/wishController.js";

router.route("/").get(getWish).post(postWish);
router.route("/:id").get(getOneWish).update(updateWish).delete(deleteWish);


export default router;