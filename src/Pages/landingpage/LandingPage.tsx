import Nav from "./Components/Nav";

import bg from "../../assets/LandingPage/LandingpageBg.jpg";
import hero from "../../assets/LandingPage/Wallet.png";
import Features from "./Components/Features";

function LandingPage() {
  return (
    <div className=" overflow-x-hidden" >
      <img
        src={bg}
        className=" absolute top-0 right-0 w-screen h-[100vh] z-[-1] "
        alt=""
      />
      <Nav />
      <div className=" w-screen h-full px-20 flex flex-row gap-[54px] justify-between items-center text-left">
        <div className=" h-full w-2/4 flex flex-col ">
          <h3 className=" text-pink ">Welcome to Wepay</h3>
          <h2 className=" text-purple  ">
            The Future of Finance in Your Pocket
          </h2>
          <p>
            Manage your money like never before with our cutting-edge digital
            wallet. Enjoy secure transactions, multi-currency support, and
            powerful financial tools, all from the convenience of your
            smartphone. Join the financial revolution and take control of your
            future today.
          </p>
          <div className=" flex flex-row items-center my-4 gap-5 ">
            <button className=" px-5 py-2 bg-purple rounded-[16px] text-[#fff] ">
              <h6>Sign In</h6>
            </button>
            <button className=" px-5 py-2 border-purple border-2 text-purple rounded-[16px] ">
              <h6>Sign Up</h6>
            </button>
          </div>
        </div>
        <div className=" w-2/4 ">
          <img src={hero} className=" w-full h-full " alt="" />
        </div>
      </div>
      <Features />
    </div>
  );
}

export default LandingPage;
