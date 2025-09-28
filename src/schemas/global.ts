import * as yup from "yup";

export const emailSchema = yup
  .string()
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Email inválido")
  .required("Email obrigatório")
  .trim()
  .min(1, "Email obrigatório");
