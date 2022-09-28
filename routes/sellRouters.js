import express from "express";
const router = express.Router();

import { getBook, postBook, getOneBook, updateBook, deleteBook } from "../controllers/sellController.js";

router.route("/").get(getBook).post(postBook);
router.route("/:id").get(getOneBook).patch(updateBook).delete(deleteBook);

export default router;