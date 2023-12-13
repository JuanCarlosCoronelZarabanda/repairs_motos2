import Repairs from "./repairs.model.js";

export class RepairsService {
  static async findOne(id) {
    return await Repairs.findOne({
      where: {
        id,
      },
    });
  }
  static async findAll() {
    return await Repairs.findAll({
      where: {
        status: "pending",
      },
    });
  }
  static async create(data) {
    return await Repairs.create(data);
  }
  static async update(repair, data) {
    return await repair.update(data);
  }
  static async delete(repair) {
    return await repair.update({
      status: "cancelled",
    });
  }
  static async findOnePending(id) {
    return await Repairs.findOne({
      where: {
        id,
        status: "pending",
      },
    });
  }
}
