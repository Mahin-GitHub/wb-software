"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';


const SwiperSlider2 = ({ webStoryGallary, imgURL }) => {
    return (
        <div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                slidesPerView={2}
                modules={[EffectCards]}
                className="mySwiper"
            >

                <div>
                    {
                        webStoryGallary?.map((webStoryData, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Link href={`news-details/${webStoryData?.slug_bn}`}  prefetch={true}>
                                    <div className="card w-full shadow-sm bg-white">
                                        <figure>
                                            <Image
                                                className='w-full h-full'
                                                src={`${imgURL}${webStoryData?.photo}`}
                                                width={500}
                                                height={500}
                                                alt='Image'
                                            />
                                        </figure>
                                        <div className="card-body">

                                            <p className='line-clamp-2'>{webStoryData?.title_bn}</p>

                                        </div>
                                    </div>
                                    </Link>
                                </SwiperSlide>

                            )
                        })
                    }
                </div>


            </Swiper>
        </div>
    )
}

export default SwiperSlider2