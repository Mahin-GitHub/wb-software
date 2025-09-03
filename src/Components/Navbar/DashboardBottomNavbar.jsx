import React from 'react'
import BottomNavItem from './BottomNavItem';
import { MdHome, MdPersonAddAlt1 } from 'react-icons/md';
import { FaRegCreditCard } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

import { FaMobileScreen } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";


import { FaBook } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';

const DashboardBottomNavbar = () => {
    const menuItems = [
        {
            icon: <MdHome />,
            text: "Home",
            path_url: "/user/dashboard"
        },
        {
            icon: <FaMobileScreen />,
            text: "MFS",
            path_url: "/user/mobile-wallet-account"
        },
        {
            icon: <BsBank2 />,
            text: "Bank",
            path_url: "/user/banking-wallet-account"
        },
        {
            icon: <FaRegCreditCard />,
            text: "Card",
            path_url: "/user/credit-card-wallet-account"
        },
        {
            icon: <FaUser />,
            text: "Profile",
            path_url: "/user/profile"
        },

    ];

    return (
        <div>
            <div className='flex justify-between items-center '>
                {menuItems.map((item, index) => (
                    <BottomNavItem key={index} item={item} />
                ))}
            </div>
        </div >
    )
}

export default DashboardBottomNavbar