import { extractValidationData } from "../../common/utils/extractErrorData.js";
import z from "zod";

const registerSchema = z.object({
  date: z.string({
    invalid_type_error: "date must be a string",
    required_error: "date is required",
  }),
  motorsNumber: z.number({
    invalid_type_error: "motorsNumbre must be a number",
    required_error: "motorsNumbre is required",
  }),
  description: z.string().min(8, { message: "description to small" }),
  userId: z.number({
    invalid_type_error: "userId must be a number",
    required_error: "userId is required",
  }),
});

export function validatePartialRepair(data) {
  const result = registerSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessages,
    data: repairData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    repairData,
  };
}
export function validateRepair(data) {
  const result = registerSchema.safeParse(data);
  const {
    hasError,
    errorMessages,
    data: repairData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    repairData,
  };
}
