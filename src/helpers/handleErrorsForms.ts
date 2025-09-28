import { FormikErrors, FormikTouched } from "formik";

export function handleErrorsForm<T>(
  touched: FormikTouched<T>,
  errors: FormikErrors<T>,
  key: keyof T
) {
  if (!touched[key] || !errors[key]) return undefined;

  return errors[key];
}
