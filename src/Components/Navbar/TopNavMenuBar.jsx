"use client";

import Link from 'next/link'
import React, { useState } from 'react'

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


        <div className="border border-gray-300 w-full h-auto bg-white">
            <nav className="overflow-x-auto scrollbar-hide no-scrollbar">
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