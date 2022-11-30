const { User } = require("../models/user.model");

const getAllUsers = async () => {
  try {
    const users = await User.findAll();

    return users;
  } catch (error) {}
};

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);

    return user;
  } catch (error) {}
};

const postUser = async (user) => {
  try {
    return await User.create(user);
  } catch (error) {
    console.log(error);
  }
};

const patchUser = async (user) => {
  const { id, ...props } = user;
  const foundUser = await User.findByPk(id);
  foundUser.set(props);

  return await foundUser.save();
};

const deleteUser = async (id) => {
  try {
    return await User.destroy({
      where: {
        id,
      },
    });
  } catch (error) {}
};

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  patchUser,
  deleteUser,
};
