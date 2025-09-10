"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";


const TopNavMenuBar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [language, setLanguage] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    const pathname = usePathname();
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
        <div className="border border-gray-300 w-full h-auto fixed sm:absolute top-0   z-50 bg-white block no-scrollbar">
            {/* Top Header */}
            <div className="bg-red-500 p-2">
                <div className="flex justify-between items-center">
                    {/* Left Section */}
                    <div className="flex justify-center items-center gap-2">

                        {
                            isMenu ? <IoClose onClick={() => setIsMenu(false)} className="w-6 h-6 text-white" /> :
                                <IoMdMenu onClick={() => setIsMenu(true)} className="w-6 h-6 text-white" />
                        }

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


            {
                isMenu && (
                    <div className="bg-white w-full h-screen z-50 ">
                        
                        <nav className="overflow-x-auto scrollbar-hide no-scrollbar">
                            <div className="flex flex-col space-x-4 px-2 py-2 font-bold text-gray-600 whitespace-nowrap">
                                {categoriesBan.map((slug, index) => {
                                    const handleClick = () => {
                                        setActiveIndex(index);
                                        setIsMenu(false);
                                    }
                                    const categorySlug = categoriesEng[index];
                                    const isActive = pathname === `/category/${categorySlug}`;
                                    return (
                                        <Link
                                            key={index}
                                            prefetch={true}
                                            onClick={handleClick}
                                            href={`/category/${categorySlug}`}
                                            className={` p-2 transition ${isActive
                                                ? "text-black "
                                                : "text-gray-500 border-transparent"
                                                }`}
                                        >
                                            {slug.charAt(0).toUpperCase() + slug.slice(1)}
                                        </Link>
                                    )


                                })}
                            </div>
                        </nav>
                    </div>
                )
            }

            {/* Scrollable Category Menu */}
            {/* <nav className="overflow-x-auto scrollbar-hide no-scrollbar">
                <div className="flex space-x-4 px-2 py-2 font-bold text-gray-600 whitespace-nowrap">
                    {categoriesBan.map((slug, index) => {
                        const categorySlug = categoriesEng[index];
                        const isActive = pathname === `/category/${categorySlug}`;
                        return (

                            <Link
                                key={index}
                                prefetch={true}
                                onClick={() => setActiveIndex(index)}
                                href={`/category/${categorySlug}`}
                                className={` p-2 transition ${isActive
                                    ? "text-black border-b-2 border-b-black"
                                    : "text-gray-500 border-transparent"
                                    }`}
                            >
                                {slug.charAt(0).toUpperCase() + slug.slice(1)}
                            </Link>
                        )


                    })}
                </div>
            </nav> */}
        </div>
    );
};

export default TopNavMenuBar;
