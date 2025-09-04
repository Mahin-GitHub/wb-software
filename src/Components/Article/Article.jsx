import Image from 'next/image'
import React from 'react'
import { RiTelegram2Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

import CarouselCart2 from '../SharComponents/CarouselCart2';
import CarouselCard from '../SharComponents/CarouselCard';
import NewsCard from '../SharComponents/NewsCard';
import SwiperSlider from '../SharComponents/SwiperSlider';
import SwiperSlider2 from '../SharComponents/SwiperSlider2';



const Article = () => {
    return (
        <div className="w-full h-auto mx-auto  bg-white  overflow-hidden">
            <div className='w-full   mx-auto sm:mb-12   sm:my-8  shadow-3xl bg-amber-950  '>
                <div className='flex justify-between items-center   p-2 '>
                    <p className='font-bold text-white'>ব্রেকিং নিউজ </p>
                    <div className='flex justify-center items-center gap-2'>
                        <RiTelegram2Fill className='w-8 h-8 bg-white p-2 rounded-full' />
                        <FaWhatsapp className='w-8 h-8 bg-white p-2 rounded-full' />
                        <IoMdShare className='w-8 h-8  p-2 text-white' />
                    </div>
                </div>
                <div className='w-full h-[220px]'>

                    <Image
                        className='w-full h-full'
                        src={"/assets/newsBanner2.jpg"}
                        width={500}
                        height={500}
                        alt='Image'
                    />
                </div>


                <div className='w-full  mx-auto sm:mb-12   p-2  shadow-3xl  text-white'>


                    <h2 className='font-bold line-clamp-2'>ঠেলায় পড়ে বীমা থেকে GST  প্রত্যাহার ?
                        মমতাকে কৃত্তিত্ব তৃণমূলের , BJP বলল , ফকজসদফল্যফেজ sdfsdfsdfsdfsdfsdfsfsdfsdfdsdsd
                    </h2>



                    <div className="my-4 py-2 flex  items-center gap-4">

                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                    </div>

                </div>



            </div>

            <div className='my-2'>
                <div className="mb-3 flex justify-between">

                    <h2 className=' font-bold'>Top Story</h2>
                    <p className="text-red-500">see all</p>
                </div>
                <div className="card w-full shadow-sm">
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
            </div>
            <div className='my-4 flex items-center gap-4 '>

                <CarouselCart2 />
                <CarouselCart2 />
                <CarouselCart2 />
                <CarouselCart2 />
                <CarouselCart2 />
            </div>

            <div className='w-full h-auto mx-auto sm:mb-12 px-2     shadow-3xl bg-white'>
                <div className="mb-3 flex justify-between">

                    <h2 className=' font-bold'>Last News</h2>
                    <p className="text-red-500">see all</p>
                </div>

                <div>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />

                </div>

            </div>

            <div className='w-full h-auto mx-auto  px-2     shadow-3xl bg-white'>
                <div className="my-2 flex justify-between">

                    <h2 className=' font-bold'>রাষ্ট্রীয় খবর </h2>
                    <p className="text-red-500">see all</p>
                </div>

                <div className='my-4 flex items-center gap-4 '>

                    <CarouselCart2 />
                    <CarouselCart2 />
                    <CarouselCart2 />
                    <CarouselCart2 />
                    <CarouselCart2 />
                </div>
            </div>

            <div className='w-full h-auto mx-auto  px-2     shadow-3xl bg-white'>
                <div className="my-2 flex justify-between">

                    <h2 className=' font-bold'>Photo Galary </h2>
                    <p className="text-red-500">see all</p>
                </div>
                <SwiperSlider />
            </div>

            <div className='w-full h-auto mx-auto  px-2     shadow-3xl bg-white'>
                <div className="my-2 flex justify-between">

                    <h2 className=' font-bold'>Web Story </h2>
                    <p className="text-red-500">see all</p>
                </div>
                <SwiperSlider2 />
            </div>
            <div className='w-full h-auto mx-auto  px-2     shadow-3xl bg-white'>
                <div className="my-2 flex justify-between">

                    <h2 className=' font-bold'>TV Show </h2>
                    <p className="text-red-500">see all</p>
                </div>
                <SwiperSlider />
            </div>


            <div className='w-full h-auto mx-auto sm:mb-12 px-2     shadow-3xl bg-white'>
                <div className="mb-3 flex justify-between">

                    <h2 className=' font-bold'>Premium</h2>
                    <p className="text-red-500">see all</p>
                </div>

                <div>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />

                </div>

            </div>
        </div >
    )
}

export default Article