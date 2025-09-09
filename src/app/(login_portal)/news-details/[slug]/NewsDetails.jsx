"use client";
import NewsDetailsSkeleton from '@/Components/Skeleton/NewsDetailsSkeleton';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const NewsDetails = ({ singleData, imgURL, newsDetails }) => {

    const dateString = singleData?.published_by_data?.created_at;
    const date = new Date(dateString);

    const onlyDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (showSkeleton) {
        return <NewsDetailsSkeleton />;
    }
    return (
        <div>
            <div className="sm:mt-8 w-full">
                <div className="w-full">
                    <Image className="w-full"
                        src={`${imgURL}${singleData?.photo}`}
                        width={500}
                        height={500}
                        alt='Single News Photo'
                    />
                    <div className=" my-4">
                        <h2 className=" text-xl font-bold">{singleData?.title_bn}</h2>
                        <p>{singleData?.published_by_data?.name} | {onlyDate}</p>

                    </div>


                    <div className=" text-gray-800 text-xs text-[20px] leading-[32px] font-serif"
                        dangerouslySetInnerHTML={{ __html: singleData?.post_bn }}
                    />


                </div>
                <h2 className='text-xl font-bold my-6'>Related News</h2>


                <div className="w-full ">
                    {
                        newsDetails?.relatedNewsData?.map((relatedNews, index) => {
                            return (
                                <div key={index} className='my-6'>
                                    <Image className="w-full"
                                        src={`${imgURL}${relatedNews?.photo}`}
                                        width={500}
                                        height={500}
                                        alt='Single News Photo'
                                    />
                                    <div className=" my-4">
                                        <h2 className=" text-xl font-bold">{relatedNews?.title_bn}</h2>
                                        <p>{relatedNews?.published_by_data?.name} | {onlyDate}</p>

                                    </div>


                                    <div className=" text-gray-800 text-xs text-[20px] leading-[32px] font-serif"
                                        dangerouslySetInnerHTML={{ __html: relatedNews?.post_bn }}
                                    />
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </div>
    )
}

export default NewsDetails