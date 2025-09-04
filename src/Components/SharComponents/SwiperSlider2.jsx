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


const SwiperSlider2 = () => {
    return (
        <div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                  slidesPerView={2}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card w-full shadow-sm bg-white">
                        <figure>
                            <Image
                                className='w-full h-full'
                                src={"/assets/newsBanner2.jpg"}
                                width={500}
                                height={500}
                                alt='Image'
                            />
                        </figure>
                        <div className="card-body">

                            <p className='line-clamp-2'>A card component has a figure, a body part, and inside body there are title and actions parts sdfjsdfkjsdkfjklsdjfklsdjfklsdjfklsjfklsdjkl</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full shadow-sm bg-white">
                        <figure>
                            <Image
                                className='w-full h-full'
                                src={"/assets/newsBanner2.jpg"}
                                width={500}
                                height={500}
                                alt='Image'
                            />
                        </figure>
                        <div className="card-body">

                            <p className='line-clamp-2'>A card component has a figure, a body part, and inside body there are title and actions parts sdfjsdfkjsdkfjklsdjfklsdjfklsdjfklsjfklsdjkl</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full shadow-sm bg-white">
                        <figure>
                            <Image
                                className='w-full h-full'
                                src={"/assets/newsBanner2.jpg"}
                                width={500}
                                height={500}
                                alt='Image'
                            />
                        </figure>
                        <div className="card-body">

                            <p className='line-clamp-2'>A card component has a figure, a body part, and inside body there are title and actions parts sdfjsdfkjsdkfjklsdjfklsdjfklsdjfklsjfklsdjkl</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full shadow-sm bg-white">
                        <figure>
                            <Image
                                className='w-full h-full'
                                src={"/assets/newsBanner2.jpg"}
                                width={500}
                                height={500}
                                alt='Image'
                            />
                        </figure>
                        <div className="card-body">

                            <p className='line-clamp-2'>A card component has a figure, a body part, and inside body there are title and actions parts sdfjsdfkjsdkfjklsdjfklsdjfklsdjfklsjfklsdjkl</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full shadow-sm bg-white">
                        <figure>
                            <Image
                                className='w-full h-full'
                                src={"/assets/newsBanner2.jpg"}
                                width={500}
                                height={500}
                                alt='Image'
                            />
                        </figure>
                        <div className="card-body">

                            <p className='line-clamp-2'>A card component has a figure, a body part, and inside body there are title and actions parts sdfjsdfkjsdkfjklsdjfklsdjfklsdjfklsjfklsdjkl</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full shadow-sm bg-white">
                        <figure>
                            <Image
                                className='w-full h-full'
                                src={"/assets/newsBanner2.jpg"}
                                width={500}
                                height={500}
                                alt='Image'
                            />
                        </figure>
                        <div className="card-body">

                            <p className='line-clamp-2'>A card component has a figure, a body part, and inside body there are title and actions parts sdfjsdfkjsdkfjklsdjfklsdjfklsdjfklsjfklsdjkl</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full shadow-sm bg-white">
                        <figure>
                            <Image
                                className='w-full h-full'
                                src={"/assets/newsBanner2.jpg"}
                                width={500}
                                height={500}
                                alt='Image'
                            />
                        </figure>
                        <div className="card-body">

                            <p className='line-clamp-2'>A card component has a figure, a body part, and inside body there are title and actions parts sdfjsdfkjsdkfjklsdjfklsdjfklsdjfklsjfklsdjkl</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full shadow-sm bg-white">
                        <figure>
                            <Image
                                className='w-full h-full'
                                src={"/assets/newsBanner2.jpg"}
                                width={500}
                                height={500}
                                alt='Image'
                            />
                        </figure>
                        <div className="card-body">

                            <p className='line-clamp-2'>A card component has a figure, a body part, and inside body there are title and actions parts sdfjsdfkjsdkfjklsdjfklsdjfklsdjfklsjfklsdjkl</p>

                        </div>
                    </div>
                </SwiperSlide>
            
            </Swiper>
        </div>
    )
}

export default SwiperSlider2