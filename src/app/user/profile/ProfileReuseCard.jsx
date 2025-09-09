import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const ProfileReuseCard = ({ text, url }) => {
    return (
        <div>
            <Link href={url}>
                <div className="flex justify-between items-center">
                    <p className="font-bold text-lg text-gray-700">{text}</p>
                    <IoIosArrowForward className='font-bold w-5 h-5 text-gray-700' />
                </div>
            </Link>
        </div>
    )
}

export default ProfileReuseCard