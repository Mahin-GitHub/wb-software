"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";

const TopNavMenuBar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [language, setLanguage] = useState(false);

    const categoriesEng = [
        "bangladesh",
        "campus",
        "cricket",
        "dhaka",
        "education",
        "football",
        "international",
        "election",
        "america",
        "entertainment",
        "law-and-justice",
    ];

    const categoriesBan = [
        "বাংলাদেশ",
        "ক্যাম্পাস",
        "ক্রিকেট",
        "ঢাকা",
        "শিক্ষা",
        "ফুটবল",
        "আন্তর্জাতিক",
        "নির্বাচন",
        "আমেরিকা",
        "বিনোদন",
        "আইন-বিচার",
    ];

    return (
        <div className="border border-gray-300 w-full h-auto bg-white block">
            {/* Top Header */}
            <div className="bg-red-500 p-2">
                <div className="flex justify-between items-center">
                    {/* Left Section */}
                    <div className="flex justify-center items-center gap-2">
                        <IoMdMenu className="w-6 h-6 text-white" />
                        <div className="flex items-center gap-2">
                            <div className="w-full h-8">
                                <Image
                                    className="w-full h-full"
                                    src={"/assets/abp_logo.png"}
                                    width={500}
                                    height={500}
                                    alt={"logo"}
                                />
                            </div>
                            <p className="text-red-500 px-2 py-0.5 bg-white font-semibold text-xs">
                                LIVE
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <Link href={"/search"}>
                            <IoSearchOutline className="w-6 h-6 text-white" />
                        </Link>
                        <FaRegUser className="w-6 h-6 text-white" />
                    </div>
                </div>
            </div>

            {/* Language Toggle */}
            {/* <div className="flex justify-center py-3">
                <button
                    onClick={() => setLanguage(!language)}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:scale-105 transition-transform"
                >
                    {language ? "Switch to বাংলা" : "Switch to English"}
                </button>
            </div> */}

            {/* Scrollable Category Menu */}
            <nav className="overflow-x-auto scrollbar-hide no-scrollbar">
                <div className="flex space-x-4 px-2 py-2 font-bold text-gray-600 whitespace-nowrap">
                    {(language ? categoriesEng : categoriesBan).map((slug, index) => (
                        <Link
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            href={`/category/${categoriesEng[index]}`} 
                            className={` p-2 transition ${activeIndex === index
                                    ? "text-black border-b-2 border-b-black"
                                    : "text-gray-500 border-transparent"
                                }`}
                        >
                            {slug.charAt(0).toUpperCase() + slug.slice(1)}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default TopNavMenuBar;
