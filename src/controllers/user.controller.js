const {
  getAllUsers,
  getUserById,
  postUser,
  patchUser,
  deleteUser: removeUser,
} = require("../services/user.service");

const findAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();

    res.json({
      users,
    });
  } catch (error) {}
};

const findUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);

    res.json({ user });
  } catch (error) {}
};

const createUser = async (req, res) => {
  try {
    const user = await postUser(req.body);

    res.json({ user });
  } catch (error) {}
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await patchUser({ id, ...req.body });

    res.json({ user });
  } catch (error) {}
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await removeUser(id);

    res.status(204).json();
  } catch (error) {}
};

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
};
