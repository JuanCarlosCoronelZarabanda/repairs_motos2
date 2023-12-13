import { AppError } from "../../common/errors/appError.js";
import { catchAsync } from "../../common/errors/catchAsync.js";
import { RepairsService } from "./repairs.service.js";

export const validatePendingRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repair = await RepairsService.findOnePending(id);

  if (!repair) {
    return next(
      new AppError(`repair with id: ${id} not found or status not pending`, 404)
    );
  }

  req.repair = repair;
  next();
});
