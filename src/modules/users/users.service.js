import User from "./users.model.js";

export class UserService {
  static async findOne(id) {
    return await User.findOne({
      where: {
        id: id,
        status: "available",
      },
    });
  }

  static async findAll() {
    return await User.findAll({
      where: {
        status: "available",
      },
    });
  }

  static async create(data) {
    return await User.create(data);
  }

  static async update(user, data) {
    return await user.update(data);
  }

  static async delete(user) {
    return await user.update({ status: "disabled" });
  }
}
