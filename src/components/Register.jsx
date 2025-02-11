import { useFormik } from "formik";
import * as Yup from "yup";

const signInSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function SignInForm({ title = "Login" }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      console.log("Sign In Data:", values);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="mt-4 text-center text-gray-600"></div>
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          {title}
        </h1>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {}
          <div>
            <input
              type="email"
              name="email"
              className={`w-full px-6 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 
                ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                }
              `}
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-sm mt-2">{formik.errors.email}</p>
            )}
          </div>

          {}
          <div>
            <input
              type="password"
              name="password"
              className={`w-full px-6 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 
                ${
                  formik.errors.password && formik.touched.password
                    ? "border-red-500"
                    : "border-gray-300"
                }
              `}
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-sm mt-2">
                {formik.errors.password}
              </p>
            )}
          </div>

          {}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
