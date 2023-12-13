import z from "zod";
import { extractValidationData } from "../../common/utils/extractErrorData.js";

const registerSchema = z.object({
  name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "name is required",
    })
    .min(3, { message: "name is to short" })
    .max(50, { message: "name it to long" }),
  email: z.string().email({ message: "invalid email" }),
  password: z
    .string()
    .min(8, { message: "password must be a last 8 characteres" })
    .max(16, { message: "Password is too long" }),
  role: z.string(),
});

const loginUserSchema = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z
    .string()
    .min(8, { message: "password mus be a last 8 characteres" })
    .max(16, { message: "Password is too long" }),
});

export function validateUser(data) {
  const result = registerSchema.safeParse(data);
  const {
    hasError,
    errorMessages,
    data: userData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    userData,
  };
}

export function validatePartialUser(data) {
  const result = registerSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessages,
    data: userData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    userData,
  };
}

export function validateLogin(data) {
  const result = loginUserSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: userData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    userData,
  };
}
