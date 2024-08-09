import { useState } from "react";
import AuthBackground from "../../../src/components/AuthBackground/AuthBackground";
import AuthBackgroundMain from "../../../src/components/AuthBackgroundMain/AuthBackgroundMain";
import CustomInlineButton from "../../../src/components/CustomInlineButton/CustomInlineButton";

const VerifyEmail = () => {
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
    <div className="flex flex-row w-screen ">
      <AuthBackground
        welcomeInfo=""
        header="Verify Your Email"
        description="To protect your account, we've sent a verification code to your email address. Please enter the code below to continue."
      ></AuthBackground>
      <AuthBackgroundMain header="Verify Email Address">
        <div className="flex flex-col gap-4 w-[80%]  justify-center ">
          <p className="text-center">
            Enter 4 digit code sent to your email address for verification
          </p>
          <form action="" method="post">
            <div className="flex flex-row items-center justify-center gap-4 my-5">
              <div className=" h-[79px] w-[61px] border border-grey rounded-lg flex items-center justify-center px-1 py-1  ">
                <input
                  type="text"
                  maxLength={1}
                  className=" border-none w-full h-full text-5xl truncate text-center "
                  name=""
                  id=""
                />
              </div>
              <div className=" h-[79px] w-[61px] border border-grey rounded-lg flex items-center justify-center px-1 py-1 ">
                <input
                  type="text"
                  maxLength={1}
                  className=" border-none w-full h-full text-5xl truncate text-center "
                  name=""
                  id=""
                />
              </div>
              <div className=" h-[79px] w-[61px] border border-grey rounded-lg flex items-center justify-center px-1 py-1 ">
                <input
                  type="text"
                  maxLength={1}
                  className=" border-none w-full h-full text-5xl truncate text-center "
                  name=""
                  id=""
                />
              </div>
              <div className=" h-[79px] w-[61px] border border-grey rounded-lg flex items-center justify-center px-1 py-1 ">
                <input
                  type="text"
                  maxLength={1}
                  className=" border-none w-full h-full text-5xl truncate text-center "
                  name=""
                  id=""
                />
              </div>
            </div>
          </form>
        
          <CustomInlineButton label="Verify"></CustomInlineButton>
          <p className="text-center text-dark text-sm">
            If you didn't receive the email, check your spam folder or
            <span className="cursor-pointer text-purple px-1">Resend Code</span>
          </p>
        </div>
      </AuthBackgroundMain>
    </div>
  );
};

export default VerifyEmail;
