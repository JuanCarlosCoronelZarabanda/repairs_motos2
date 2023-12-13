import express from "express";
import { router as usersRoute } from "../modules/users/users.route.js";
import { router as repairsRaute } from "../modules/repairs/repairs.route.js";

export const router = express.Router();
router.use("/repairs", repairsRaute);
router.use("/users", usersRoute);
