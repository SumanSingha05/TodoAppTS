"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route("/").post(); //create todo
router.route("/").get(); // get todo
router.route("/:todoId").patch(); // update todo
router.route("/:todoId").delete(); // get todo
exports.default = router;
