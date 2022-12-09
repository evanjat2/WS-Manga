import express from "express";

import authenticateUser from "../middleware/auth.js";
import { getWishes, getOwnWishes, postWish, getOneWish, updateWish, deleteWish } from "../controllers/wishController.js";

const router = express.Router();

router
  .route("/")
  .get(authenticateUser, getOwnWishes)
  .post(authenticateUser, postWish);
router.route("/all").get(getWishes);
router
  .route("/:id")
  .get(getOneWish)
  .patch(authenticateUser, updateWish)
  .delete(authenticateUser, deleteWish);

export default router;