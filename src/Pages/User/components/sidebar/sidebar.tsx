import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../../../assets/Group 5 1.png";
import { Icon } from '@iconify/react';
import dashboardIcon from '@iconify-icons/mdi/view-dashboard';

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen , ] = useState(false);

  const toggleNav = () => {
   setIsOpen(!isOpen)
  }
  const close = () => {
    setIsOpen(isOpen)
   }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.sidebar') === null && event.target.closest('.top-bar') === null) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navs = [
    {
      text: "Dashboard",
      link: "/user/dashboard",
      icon: dashboardIcon,
    },
    {
      text: "Transfer",
      link: "/user/transfer",
      icon: "solar:card-transfer-bold",
    },
    {
      text: "Transactions",
      link: "/user/transactions",
      icon: "uil:exchange",
    },
    {
      text: "Manage wallet",
      link: "/user/managewallet",
      icon: "solar:wallet-outline",
    },
  ];

  const navb = [
    {
      text: "Account",
      link: "/user/account",
      icon: "material-symbols:person",
    }
  ];

  return (
    <div className={`flex relative `}>
      <div className="w-4 h-full lg:hidden bg-white shadow-sm  flex items-center z-10">
        <div className={`d bg-white rounded-full   cursor-pointer ${isOpen ? ' top-4 left-2  '  : 'left-1'} absolute top-12  z-30`}>
        <Icon
        
          onClick={toggleNav} 
          icon="mingcute:right-line" 
          className={`text-xl ${isOpen ? 'hidden' : 'block'}`}
        />
        <Icon
        onClick={close} 
        icon="mdi:close" 
        className={`text-xl  ${isOpen ? 'block' : 'hidden'}`}
      />
        </div>
        
      </div>

     <div onClick={close} className={`overlay bg-dark/70 bg-blend-saturation w-screen h-screen absolute z-[15] ${isOpen ? 'block' : 'hidden'} `}>

     </div>
      <div className={`lg:w-[20vw] w-[50vw] h-full bg-white pt-9 myshadow transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative lg:block lg:shadow-none absolute  z-20`}>
        <div className="flex flex-col gap-4">
          <div className="image w-full flex justify-center">
            <img src={Logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-[200px]">
            <div className="navs flex flex-col gap-2">
              {navs.map((nav, key) => {
                const isActive = location.pathname === nav.link;
                return (
                  <Link key={key} to={nav.link} onClick={() => setIsOpen(false)}>
                    <div
                      className={`w-full text-base font-medium flex items-center px-6 py-3 gap-2 hover:border-r-2 hover:text-[#9A1A87] hover:border-[#9A1A87] cursor-pointer ${
                        isActive ? ' text-[#9A1A87] border-r-2 border-[#9A1A87]' : ' text-light_dark'
                      }`}
                    >
                      <Icon icon={nav.icon} className="text-xl" />
                      {nav.text}
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="navb flex flex-col gap-2">
              {navb.map((nav, key) => {
                const isActive = location.pathname === nav.link;
                return (
                  <Link key={key} to={nav.link} onClick={() => setIsOpen(false)}>
                    <div
                      className={`w-full text-base font-medium flex items-center px-6 py-3 gap-2 hover:border-r-2 hover:text-[#9A1A87] hover:border-[#9A1A87] cursor-pointer ${
                        isActive ? ' text-[#9A1A87] border-r-2 border-[#9A1A87]' : ' text-light_dark'
                      }`}
                    >
                      <Icon icon={nav.icon} className="text-xl" />
                      {nav.text}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
