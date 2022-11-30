const {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const express = require("express");
const userRouter = express.Router();

userRouter.get("/", findAllUsers);
userRouter.get("/:id", findUserById);
userRouter.post("/", createUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

module.exports = {
  userRouter,
};
