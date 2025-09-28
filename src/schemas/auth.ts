import { emailSchema } from "@/schemas/global";
import * as yup from "yup";

export const authFormSchema = yup.object().shape({
  email: emailSchema,
  password: yup
    .string()
    .required("Senha obrigatória")
    .trim()
    .min(1, "Senha obrigatória"),
});

export type AuthFormData = {
  email: string;
  password: string;
};
