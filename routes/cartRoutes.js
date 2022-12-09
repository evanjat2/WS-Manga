import express from "express";
const router = express.Router();

import {
  createCart,
  checkCart,
  deleteCart,
  getOwnedCart,
} from "../controllers/cartController.js";
import authenticateUser from "../middleware/auth.js";

router
  .route("/")
  .get(authenticateUser, getOwnedCart)
  .post(authenticateUser, createCart);
router.route("/check").post(checkCart);
router.route("/delete").post(authenticateUser, deleteCart);
// router
//   .route("/:id")
//   .get(getOneBook)
//   .patch(authenticateUser, updateBook)
//   .delete(authenticateUser, deleteBook);

export default router;
