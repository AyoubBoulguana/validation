import * as Yup from "yup";
export const signUpSchema = Yup.object().shape({
  fullname: Yup.String().required("You need at least 3 chars"),
  email: Yup.String().email().required("Email is required"),
  password: Yup.String().min(8, "Password is too short - should be 8"),
  passwordConfirm: Yup.String().oneOf([Yup.ref("password"), null], "Passwords"),
  Fullname: Yup.string().required("Fullname is required"),
});
