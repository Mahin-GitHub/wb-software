import React from 'react'

import BottomNavItem from './BottomNavItem'
import { MdHome, MdPersonAddAlt1 } from 'react-icons/md';
import { CgLogIn } from 'react-icons/cg';
import { FaBook } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';

const BottomNav = () => {
    const menuItems = [
        {
            icon: <MdHome />,
            text: "Home",
            path_url: "/"
        },
        {
            icon: <FaBook />,
            text: "Category",
            path_url: "/categories"
        },
        {
            icon: <CgLogIn />,
            text: "Login",
            path_url: "/login"
        },
        {
            icon: <MdPersonAddAlt1 />,
            text: "Register",
            path_url: "/register"
        },
        {
            icon: <BsTelephoneFill />,
            text: "Contact",
            path_url: "/contact"
        },

    ];

    return (
        <div>
            <div className='flex justify-between items-center '>
                {menuItems.map((item, index) => (
                    <BottomNavItem key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default BottomNav