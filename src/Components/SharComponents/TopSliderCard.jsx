

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import CarouselCard from './CarouselCard';
import Link from 'next/link';



const TopSliderCard = ({ imgURL, topNavSliderData }) => {


    return (
        <div>


            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}

                modules={[FreeMode]}

            >
                {topNavSliderData?.map((sliderData, index) => (
                    <SwiperSlide key={index} className="flex  h-full">
                        <Link href={`news-details/${sliderData?.slug_bn}`}  prefetch={true}>
                            <CarouselCard sliderData={sliderData} imgURL={imgURL} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>


        </div >
    )
}

export default TopSliderCard


