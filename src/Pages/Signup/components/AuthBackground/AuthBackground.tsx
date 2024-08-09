import React from "react";
import logo from "../../assets/images/logo.png";
interface AuthBackgroundProps {
  welcomeInfo: String;
  header: String;
  description: String;
}

const AuthBackground: React.FC<AuthBackgroundProps> = ({
  welcomeInfo,
  header,
  description,
}) => {
  return (
    <div className="bg-[url('src/assets/images/background_noise.png')] w-full h-screen  items-center flex justify-center relative ">
    
      <div className=" shadow-2xl w-[90%] h-[85%] flex flex-col justify-center items-center absolute right-0 ">
      
        <img className=" w-100 h-100" src={logo} alt="" />
      
        <div className="flex flex-col items-center justify-center space-y-3 max-w-[70%]">
          <h1 className="text-white  text-xl ">{welcomeInfo}</h1>
          <h1 className="text-white  text-4xl font-bold text-center">
            {header}
          </h1>
          <h1 className="text-white  text-sm text-center">{description}</h1>
        </div>
      </div>
    </div>
  );
};

export default AuthBackground;
