import { UserService } from "./users.service.js";

export const findAllUsers = async (req, res) => {
  try {
    const users = await UserService.findAll();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await UserService.create({ name, email, password, role });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
    });
  }
};

export const findOneUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserService.findOne(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "user not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await UserService.findOne(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "user not found",
      });
    }

    const userUpdated = await UserService.update(user, { name, email });

    return res.status(200).json(userUpdated);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserService.findOne(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "user not found",
      });
    }

    await UserService.delete(user);

    return res.status(204).json(null);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
    });
  }
};
