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

            <div className='w-full flex justify-between items-center gap-4 shadow-sm mb-2 py-2'>
                <div className='w-3/4 break-words'>

                    <p className='wrap-break-word line-clamp-3 p-2'>{title_bn}</p>
                </div>
                <div className=" w-1/2 ">
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