import z from "zod";
import { genderEnum } from "../../common/enums/enum.js";

export const signInSchema = z.strictObject({
  email: z.string().email(),
  password: z.string().min(8).max(32),
});

export const signUpSchema = z.strictObject({
  name: z.string().min(3).max(32),
  email: z.string().email(),
  password: z.string().min(8).max(32),
  rePassword: z.string().min(8).max(32),
  age: z.number().min(18).max(100),
  gender: z.enum(["male", "female"]).transform((v) => genderEnum[v]),
  phone: z.string().min(8).max(32),
});