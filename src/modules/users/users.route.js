import express from "express";
import {
  deleteOne,
  findAll,
  create,
  findOne,
  login,
  updateOne,
} from "./users.controller.js";
import { validateExistUser } from "./users.middleware.js";

export const router = express.Router();
router.post("/", create);
router.post("/login", login);
router.get("/", findAll);
router
  .route("/:id")
  .get(validateExistUser, findOne)
  .put(validateExistUser, updateOne)
  .delete(validateExistUser, deleteOne);
