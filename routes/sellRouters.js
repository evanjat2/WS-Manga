import express from "express";
const router = express.Router();

import {
  getBook,
  postBook,
  getOneBook,
  updateBook,
  deleteBook,
  getOwnedBook,
} from "../controllers/sellController.js";
import authenticateUser from "../middleware/auth.js";

router
  .route("/")
  .get(authenticateUser, getOwnedBook)
  .post(authenticateUser, postBook);
router.route("/all").get(getBook);
router
  .route("/:id")
  .get(getOneBook)
  .patch(authenticateUser, updateBook)
  .delete(authenticateUser, deleteBook);

export default router;
