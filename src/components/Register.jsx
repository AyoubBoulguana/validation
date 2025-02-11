import { useFormik } from "formik";

export default function Register(props) {
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
    formik.setFieldError(name, undefined);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">{props.title}</h1>

      <form onSubmit={formik.handleSubmit} className="w-[600px]">
        <div class="mb-4 space-y-6">
          <div>
            <input
              type="text"
              id="fullname"
              name="fullname"
              class={`w-full px-[24px] py-[25px] border  rounded-md focus:outline-none focus:ring-2 focus:ring-green-500
                ${formik.errors.fullname ? "border-red-500" : "border-gray-300"}
                `}
              placeholder="Full Name"
              onChange={(e) => handleInputChange(e)}
            />
            <p className="text-red-500">{formik.errors.fullname}</p>
          </div>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => handleInputChange(e)}
            class="w-full px-[24px] py-[25px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            name="password"
            class="w-full px-[24px] py-[25px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            class="w-full px-[24px] py-[25px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Confirm Password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <button
          type="submit"
          class="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
