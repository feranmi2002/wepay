import pricingBg from "../../../assets/LandingPage/pricingBg.png";
import freeCard from "../../../assets/LandingPage/freeCard.png";

function Pricing() {
  const freeCard = [
    {
      icon: "check",
      text: "Secure Transactions",
    },
    {
      icon: "check",
      text: "Basic analysis",
    },
    {
      icon: "close",
      text: "Global access",
    },
    {
      icon: "close",
      text: "Multi currency",
    },
  ];
  return (
    <div className=" w-full h-[100vh] px-32 py-5 flex flex-row items-center justify-between relative ">
      <img
        src={pricingBg}
        className=" w-full absolute top-0 left-0 blur-xl z-[-1] "
        alt=""
      />
      <div className=" w-2/4 flex flex-col ">
        <h3 className=" text-gd from-purple to-pink ">
          Choose the Perfect Plan for You
        </h3>
        <p className=" text-light_dark w-3/4 ">
          Our flexible plans are designed to meet your financial needs, whether
          you're just starting or need advanced features.
        </p>
      </div>
      <div className=" w-2/4 flex flex-row gap-10 items-center justify-center ">
        <div className=" w-full h-[70vh] bg-white rounded-xl ">
          <div className=" h-1/4 flex items-center justify-center ">
            <h4 className=" text-purple ">FREE</h4>
          </div>
          <div className=" w-full h-3/4 flex flex-col items-center justify-between bg-purple bg-background-noise rounded-b-xl py-10 text-white ">
            <h5>NOOB</h5>
            <div className=" flex flex-col gap-3 ">
              {freeCard.map((free, index) => (
                <p className=" flex flex-row gap-1 items-center " key={index}>
                  <span className="material-symbols-outlined">{free.icon}</span>
                  {free.text}
                </p>
              ))}
            </div>
            <button className=" bg-white rounded-2xl px-10 py-2 text-purple ">
              Get Started
            </button>
          </div>
        </div>
        <div className=" bg-[#fff] w-full h-3/4 ">
          <h4 className="">FREE</h4>
          <div className=" bg-[url('../../../assets/LandingPage/freeCard.png')] "></div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
