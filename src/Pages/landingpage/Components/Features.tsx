import instant from "../../../assets/LandingPage/instant.png";
import multi from "../../../assets/LandingPage/multi.png";
import top from "../../../assets/LandingPage/top.png";
import global from "../../../assets/LandingPage/global.png";
import user from "../../../assets/LandingPage/user.png";
import customer from "../../../assets/LandingPage/customer.png";

function Features() {
  const features = [
    {
      image: instant,
      heading: "Instant Transactions",
      sub: "Fast and seamless transactions anytime, anywhere. Transfer money to friends, pay for goods, or exchange currencies with just a few taps.",
    },
    {
      image: multi,
      heading: "Multi-Currency",
      sub: "Manage multiple currencies, including fiat and cryptocurrencies, all in one place. Enjoy easy conversions and competitive exchange rates.",
    },
    {
      image: top,
      heading: "Top-Notch Security",
      sub: "Your funds are protected with advanced encryption, two-factor authentication, and biometric verification. Trust iour security measures to keep your assets safe.",
    },
    {
      image: global,
      heading: "Global Access",
      sub: "Your wallet goes where you go. Enjoy full functionality and access to your funds no matter where you are in the world.",
    },
    {
      image: user,
      heading: "User-Friendly Interface",
      sub: "Navigate your finances with ease using our intuitive design. Track spending, set budget goals, and monitor investments with real-time insights.",
    },
    {
      image: customer,
      heading: "24/7 Customer Support",
      sub: "Have questions or need assistance? Our dedicated support team is available around the clock to help you via chat, email, or phone.",
    },
  ];
  return (
    <div className=" w-full h-[100vh] px-32 py-5 flex flex-col items-center justify-center ">
      <h4 className=" text-center text-purple my-4 ">FEATURES</h4>
      <div className=" grid grid-cols-3 gap-20 ">
        {features.map((features, index) => (
          <div className=" flex flex-col items-center text-center " key={index}>
            <img src={features.image} className=" w-[56px] h-[56px] my-2 " alt="" />
            <h5 className=" text-purple my-1 ">{features.heading}</h5>
            <p>{features.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
