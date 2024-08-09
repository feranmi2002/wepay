import { useState } from "react";
import AuthBackground from "../../../src/components/AuthBackground/AuthBackground";
import AuthBackgroundMain from "../../../src/components/AuthBackgroundMain/AuthBackgroundMain";
import CustomInlineButton from "../../../src/components/CustomInlineButton/CustomInlineButton";
import CustomInput from "../../../src/components/CustomInput/CustomInput";

const Login = () => {
  const [values, setValues] = useState({
    password: "",
    email: "",
  });

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(name);
  };
  console.log(values);

  return (
    <div className="flex flex-row w-screen">
      <AuthBackground
        welcomeInfo="Nice to see you again"
        header="Welcome Back"
        description="Manage your finances, track your spending, monitor your investments, and access a range of innovative financial tools to help you achieve your financial goals—all in one secure and easy-to-use platform."
      ></AuthBackground>
      <AuthBackgroundMain header="Sign In">
        <div className="flex flex-col gap-4 w-[80%]  justify-center ">
          <CustomInput
            label="Email"
            hint="Enter email"
            name="email"
            onChange={onChange}
            type={"email"}
          />
          <div className="flex flex-row relative">
            <CustomInput
              label="Password"
              hint="Enter Password"
              type={"password"}
              onChange={onChange}
              name="password"
            />
          </div>
          <div className="w-full flex flex-row items-center justify-end">
            <p className="cursor-pointer text-purple text-sm">Forgot password</p>
          </div>
          <CustomInlineButton label="Sign In"></CustomInlineButton>
          <p className="text-center text-dark text-sm">
            Don't have an account?
            <span className="cursor-pointer text-purple px-1">
              Sign up
            </span>
          </p>
        </div>
      </AuthBackgroundMain>
    </div>
  );
};

export default Login;
