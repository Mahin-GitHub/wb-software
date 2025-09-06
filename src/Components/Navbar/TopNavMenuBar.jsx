"use client";

import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";


const TopNavMenuBar = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const topNavLinks = [
        {
            text: "হোম",
            path: "#"
        },
        {
            text: "খবর",
            path: "#"
        },
        {
            text: "জেলার খবর",
            path: "#"
        },
        {
            text: "কলকাতা",
            path: "#"
        },
        {
            text: "রাজ্য ",
            path: "#"
        },
        {
            text: "ভারত",
            path: "#"
        },
        {
            text: "খেলা",
            path: "#"
        },
        {
            text: "বিনোদন",
            path: "#"
        },
        {
            text: "খুঁটিনাটি",
            path: "#"
        },
        {
            text: "অফবিট",
            path: "#"
        },
        {
            text: "স্বাস্থ",
            path: "#"
        },
        {
            text: "আজ  ফোকাস-এ",
            path: "#"
        },
        {
            text: "ব্যবসা-বাণিজ্য",
            path: "#"
        },
        {
            text: "লাইফস্টাইল",
            path: "#"
        },
        {
            text: "শিক্ষা",
            path: "#"
        },
        {
            text: "বিজ্ঞান",
            path: "#"
        },
        {
            text: "পুজো পরব",
            path: "#"
        },
        {
            text: "প্রযুক্তি",
            path: "#"
        },
        {
            text: "অটো",
            path: "#"
        },
        {
            text: "জোতিষ",
            path: "#"
        },
    ]
    return (


        <div className="border border-gray-300 w-full h-auto bg-white block">
            <div className="bg-red-500 text-red p-2">
                <div className='flex justify-between items-center '>
                    <div className='flex justify-center items-center gap-2'>
                        <div>
                            <IoMdMenu className='w-6 h-6 text-white' />

                        </div>
                        <div className="flex items-center gap-2">
                            <div className='w-full h-8'>
                                <Image className='w-full h-full'
                                    src={"/assets/abp_logo.png"}
                                    width={500}
                                    height={500}
                                    alt={"logo"}
                                />
                            </div>
                            <div>
                                <p className='text-red-500 p-1 bg-white'>LIVE</p>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div>
                            <Link href={"/search"}>
                            <IoSearchOutline className='w-6 h-6 text-white' />
                            </Link>
                        </div>
                        <div>
                            <FaRegUser className='w-6 h-6 text-white' />
                        </div>
                    </div>
                </div>

            </div>
            <nav className="overflow-x-auto scrollbar-hide no-scrollbar ">
                <div className="flex space-x-4 px-2 py-2 font-bold text-gray-600 whitespace-nowrap">
                    {topNavLinks?.map((link, index) => (
                        <Link
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            href={link?.path}
                            className={`px-3 py-1 transition ${activeIndex === index ? "text-black border-b-2 border-b-black" : " text-gray-500 border-transparent"}`}
                        >
                            {link?.text}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default TopNavMenuBar