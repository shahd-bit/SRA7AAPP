import { BadRequestException } from "../errors/appError.js";

export const validation = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      throw BadRequestException({ message: result.error.message, extra: result.error.issues });
    }
    req.body = result.data;
    next();
  };
};