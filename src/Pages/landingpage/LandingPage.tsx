import Nav from "./Components/Nav";

import bg from "../../assets/LandingPage/LandingpageBg.jpg";
import hero from "../../assets/LandingPage/Wallet.png";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";

function LandingPage() {
  return (
    <div className=" w-full ">
      <img
        src={bg}
        className=" absolute top-0 right-0 w-screen h-[100vh] z-[-1] "
        alt=""
      />
      <Nav />
      <div className=" w-full h-full px-20 flex flex-row gap-[54px] justify-between items-center text-left">
        <div className=" h-full w-2/4 flex flex-col ">
          <h3 className=" text-pink ">Welcome to Wepay</h3>
          <h2 className=" text-purple w-3/4 ">
            The Future of Finance in Your Pocket
          </h2>
          <p className=" text-[#616163] ">
            Manage your money like never before with our cutting-edge digital
            wallet. Enjoy secure transactions, multi-currency support, and
            powerful financial tools, all from the convenience of your
            smartphone. Join the financial revolution and take control of your
            future today.
          </p>
          <div className=" flex flex-row items-center my-4 gap-5 ">
            <button className=" px-12 py-2 bg-purple rounded-[32px] border-2 border-purple text-[#fff] hover:bg-[transparent] hover:text-purple transition-all ">
              <p>Sign In</p>
            </button>
            <button className=" px-12 py-2 bg-purple rounded-[32px] border-2 border-purple text-[#fff] hover:bg-[transparent]  hover:text-purple transition-all ">
              <p>Sign Up</p>
            </button>
          </div>
        </div>
        <div className=" w-2/4 ">
          <img src={hero} className=" w-full h-full " alt="" />
        </div>
      </div>
      <Features />
      <Pricing />
    </div>
  );
}

export default LandingPage;
