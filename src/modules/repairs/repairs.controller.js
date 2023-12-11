import { RepairService } from "./repairs.service.js";

export const findAllRepairs = async (req, res) => {
  try {
    const repairs = await RepairService.findAll();

    return res.status(200).json(repairs);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
    });
  }
};

export const createRepair = async (req, res) => {
  try {
    const { date, userId } = req.body;

    const repair = await RepairService.create({ date, userId });

    return res.status(201).json(repair);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
    });
  }
};

export const findOneRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await RepairService.findOne(id);

    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: "repair not found",
      });
    }

    return res.status(200).json(repair);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
    });
  }
};

export const updateRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await RepairService.findOne(id);

    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: "repair not found",
      });
    }

    const repairUpdated = await RepairService.update(repair);

    return res.status(200).json(repairUpdated);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
    });
  }
};

export const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await RepairService.findOne(id, ["pending", "completed"]);

    if (repair?.status === "completed") {
      return res.status(400).json({
        status: "error",
        message: "the repair has been already completed",
      });
    }

    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: "repair not found",
      });
    }

    await RepairService.delete(repair);

    return res.status(204).json(null);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
      error,
    });
  }
};
