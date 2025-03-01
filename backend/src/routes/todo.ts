import express from "express";
import { createTodo } from "../controllers/todo";

const router = express.Router();

router.route("/").post(createTodo) //create todo
router.route("/").get() // get todo
router.route("/:todoId").patch() // update todo
router.route("/:todoId").delete() // get todo

export default router;