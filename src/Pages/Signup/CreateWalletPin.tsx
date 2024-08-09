import { useState } from "react";
import AuthBackground from "../../../src/components/AuthBackground/AuthBackground";
import AuthBackgroundMain from "../../../src/components/AuthBackgroundMain/AuthBackgroundMain";
import CustomInlineButton from "../../../src/components/CustomInlineButton/CustomInlineButton";
import CustomInput from "../../../src/components/CustomInput/CustomInput";

const CreateWalletPin = () => {
  const [values, setValues] = useState({
    pin: "",
    confirmPin: "",
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
        header="Secure Your Account"
        description="You'll need your pin to authorize transactions. Don't share your pin with anyone"
      ></AuthBackground>
      <AuthBackgroundMain header="Create Wallet Pin">
        <div className="flex flex-col gap-10 w-[80%]  justify-center ">
          <CustomInput
            label="Pin"
            hint="Enter pin"
            name="pin"
            onChange={onChange}
            type={"password"}
          />
          <div className="flex flex-row relative">
            <CustomInput
              label="Confirm Pin"
              hint="Enter Pin"
              type={"password"}
              onChange={onChange}
              name="confirmPin"
            />
          </div>    
          <CustomInlineButton label="Submit"></CustomInlineButton>        
        </div>
      </AuthBackgroundMain>
    </div>
  );
};

export default CreateWalletPin;
