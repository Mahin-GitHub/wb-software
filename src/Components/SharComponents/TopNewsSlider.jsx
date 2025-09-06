import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';



const TopNewsSlider = ({ topNewsData, imgURL }) => {
    return (
        <>
            <Swiper
                spaceBetween={30}


            >
                {
                    topNewsData?.map((data, index) => {
                        const { photo, title_bn } = data;
                        return (

                            <SwiperSlide key={index}>
                                <div className='w-full h-[220px]'>

                                    <Image
                                        className='w-full h-full'
                                        src={
                                            `${imgURL}${photo}`
                                        }
                                        width={500}
                                        height={500}
                                        alt='Image'
                                    />
                                </div>
                                <h2 className='font-bold line-clamp-2 text-white p-2'>
                                    {title_bn}
                                </h2>
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
        </>
    )
}

export default TopNewsSlider



