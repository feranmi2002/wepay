import { useState } from "react";
import AuthBackground from "../../../src/components/AuthBackground/AuthBackground";
import AuthBackgroundMain from "../../../src/components/AuthBackgroundMain/AuthBackgroundMain";
import CustomInlineButton from "../../../src/components/CustomInlineButton/CustomInlineButton";
import CustomInput from "../../../src/components/CustomInput/CustomInput";

const SignUp = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
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
    <div className="flex flex-row w-screen ">
      <AuthBackground
        welcomeInfo=""
        header="Join Us Today!"
        description="Create your account to take full control of your finances. Monitor your spending, set savings goals, and explore advanced financial tools designed to help you build a secure financial future all in one convenient platform."
      ></AuthBackground>
      <AuthBackgroundMain header="Sign Up">
        <div className="flex flex-col grid grid-cols-2 grid-rows-3 gap-8 w-[80%]  justify-center ">
          <CustomInput
            label="First Name"
            hint="Enter First Name"
            name="firstName"
            onChange={onChange}
            type={"text"}
          />
          <CustomInput
            label="Last Name"
            hint="Enter Last Name"
            name="lastName"
            onChange={onChange}
            type={"text"}
          />
          <CustomInput
            label="Email"
            hint="Enter email"
            name="email"
            onChange={onChange}
            type={"email"}
          />
          <CustomInput
            label="Mobile No"
            hint="Enter Mobile No"
            name="mobileNo"
            onChange={onChange}
            type={"text"}
          />

          <CustomInput
            label="Password"
            hint="Enter Password"
            type={"password"}
            onChange={onChange}
            name="password"
          />

          <CustomInput
            label="Confirm Password"
            hint="Enter Password"
            type={"password"}
            onChange={onChange}
            name="confirmPassword"
          />
          </div>
          <div className=" w-[80%] flex flex-col gap-5 mt-10">    
          <CustomInlineButton label="Sign Up"></CustomInlineButton>
          <p className="text-center text-dark text-base font-normal">
            Already have an account?
            <span className="cursor-pointer text-purple px-1">Sign In</span>
          </p>
        </div>
      </AuthBackgroundMain>
    </div>
  );
};

export default SignUp;
