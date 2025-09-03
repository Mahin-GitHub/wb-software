import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdHome } from 'react-icons/md'
import { FaBell } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";


const DashboardTopNavbar = () => {
    return (
        <div>
            <div className='w-full  p-2 flex justify-between items-center  bg-orange-400'>
                <div>
                    <Link href={"/user/dashboard"}>
                        <MdHome className='w-6 h-6 text-white font-bold' />
                    </Link>
                </div>
                <div className="w-[180px]">
                    <Image
                        className="w-full h-auto"
                        src="/assets/logoWhite.png"
                        width={1000}
                        height={1000}
                        alt="logo"
                    />
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <button>
                        <IoIosMailOpen className='w-6 h-6 text-white font-bold' />
                    </button>
                    <button>
                        <FaBell className='w-6 h-6 text-white font-bold' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DashboardTopNavbar