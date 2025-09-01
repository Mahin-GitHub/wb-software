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
        <div className='flex justify-center items-center  '>
            <div className=' my-[50px] mx-auto '>
                <div className='w-[375px] h-[665px] border-6 shadow-2xl   border-black rounded-3xl   relative bg-[#F4F8FB] flex flex-col justify-center items-center'>

                    <div className="absolute top-2">
                        {/* Top Logo  */}
                        <div className='w-[220px] h-auto'>

                            <Image className='w-full h-full' src={"/assets/logo.png"} width={1000} height={1000} alt='logo' />
                        </div>


                    </div>
                    <div>

                        {children}
                    </div>


                    {/* Bottom Menu */}
                    <div className='absolute bottom-0 left-0 w-full'>
                        <div className='bg-white w-full py-1 rounded-b-3xl flex justify-between items-center px-4'>
                            {menuItems.map((item, index) => (
                                <BottomMenu key={index} item={item} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Navbar