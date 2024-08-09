import Logo from "../../../assets/logo/logo.png";

function Nav() {
  return (
    <div className=" w-full h-fit py-3 px-20 flex items-center justify-between ">
      <img src={Logo} alt="" />
      <div className=" w-1/4 flex flex-row justify-between items-center ">
        <p>Home</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Contact</p>
      </div>
      <button className=" px-5 py-2 bg-purple rounded-[16px] text-[#fff] ">
        <h6>Download App</h6>
      </button>
    </div>
  );
}

export default Nav;
