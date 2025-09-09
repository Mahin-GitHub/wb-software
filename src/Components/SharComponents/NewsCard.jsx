"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { NewsCardSkeleton } from '../Skeleton/NewsCardSkeleton';

const NewsCard = ({ cardNews, imgURL }) => {

    const { title_bn, photo } = cardNews;



    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (showSkeleton) {
        return <NewsCardSkeleton />;
    }
    return (
        <div>

            <div className='w-full h-full flex justify-between items-center gap-4  rounded-sm shadow-sm mb-2 p-2 bg-white'>
                <div className=''>

                    <p className='sm:w-[220px] line-clamp-3 text-sm '>{title_bn}</p>
                </div>
                <div className="sm:w-[350px] h-[50px]  ">
                    <Image
                        src={`${imgURL}${photo}`}
                        width={500}
                        height={500}
                        alt="cartImg"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

            </div>
        </div>
    )
}

export default NewsCard