import express from "express";
const router = express.Router();

import { createCart, checkCart } from "../controllers/cartController.js";
import authenticateUser from "../middleware/auth.js";

router
  .route("/")
  // .get(authenticateUser, getOwnedBook)
  .post(authenticateUser, createCart);
router.route("/check").post(checkCart);
router;
//   .route("/:id")
//   .get(getOneBook)
//   .patch(authenticateUser, updateBook)
//   .delete(authenticateUser, deleteBook);

export default router;
