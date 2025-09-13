"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Link from 'next/link';


const SwiperSlider = ({ photoGallaryData, imgURL }) => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                spaceBetween={20}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 3,
                    slideShadows: false,
                }}

                modules={[EffectCoverflow]}
                className="mySwiper"
            >

                <div>
                    {
                        photoGallaryData?.map((gallaryData, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Link href={`news-details/${gallaryData?.slug_bn}`} prefetch={true}>
                                        <div className="card w-full shadow-sm bg-white">
                                            <figure>
                                                <Image
                                                    className='w-full h-full'
                                                    src={`${imgURL}${gallaryData?.photo}`}
                                                    width={500}
                                                    height={500}
                                                    alt='Image'
                                                />
                                            </figure>
                                            <div className="card-body">

                                                <p className='line-clamp-2'>{gallaryData?.title_bn}</p>

                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </div>


            </Swiper>
            <style jsx global>{`
        .mySwiper .swiper-slide {
          transform: scale(0.8) translateY(40px); /* side images ছোট + নিচে নামানো */
  opacity: 0.75; /* side images ফিকে */
  transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .mySwiper .swiper-slide-active {
         transform: scale(1.1) translateY(-20px); /* middle image বড় + উপরে তোলা */
  opacity: 1; /* active image পুরো visible */
  z-index: 10;
        }
      `}</style>
        </div>
    )
}

export default SwiperSlider