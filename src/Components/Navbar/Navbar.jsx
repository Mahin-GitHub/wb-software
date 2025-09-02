import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdHome } from "react-icons/md";
import { CgLogIn } from "react-icons/cg";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import BottomMenu from './BottomMenu';




const Navbar = ({ children }) => {

    const menuItems = [
        {
            icon: <MdHome />,
            text: "Home",
            path_url: "/webuser/home"
        },
        {
            icon: <CgLogIn />,
            text: "Login",
            path_url: "/webuser/login"
        },
        {
            icon: <MdPersonAddAlt1 />,
            text: "Register",
            path_url: "/webuser/register"
        },
        {
            icon: <FaBook />,
            text: "Blog",
            path_url: "/webuser/blog"
        },
        {
            icon: <BsTelephoneFill />,
            text: "Contact",
            path_url: "/webuser/contact"
        },

    ];

    return (



<div className="flex justify-center items-center bg-white sm:my-[50px]">
  {/* Phone Mockup */}
  <div className="relative w-full h-screen sm:max-w-[375px] sm:h-[665px] 
                  sm:border-6 sm:shadow-2xl sm:border-black sm:rounded-2xl 
                  bg-gray-100 flex flex-col">

    {/* Scrollable Screen */}
    <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-4 pt-6 pb-6 flex flex-col">
      
      {/* Top Logo (always top) */}
      <div className="w-full flex justify-center mb-4">
        <div className="w-[220px]">
          <Image
            className="w-full h-auto"
            src="/assets/logo.png"
            width={1000}
            height={1000}
            alt="logo"
          />
        </div>
      </div>

      {/* Children (centered only) */}
      <div className="flex-1 flex justify-center items-center">
        {children}
      </div>
    </div>

    {/* Bottom Menu */}
    <div className="bg-white py-2 sm:rounded-b-2xl flex justify-between items-center px-4">
      {menuItems.map((item, index) => (
        <BottomMenu key={index} item={item} />
      ))}
    </div>
  </div>
</div>


    )
}

export default Navbar