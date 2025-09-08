import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { RiTelegram2Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

import CarouselCart2 from '../SharComponents/CarouselCart2';
import CarouselCard from '../SharComponents/CarouselCard';
import NewsCard from '../SharComponents/NewsCard';
import SwiperSlider from '../SharComponents/SwiperSlider';
import SwiperSlider2 from '../SharComponents/SwiperSlider2';
import TopNavSliderImg from '../SharComponents/TopNavSliderImg';
import TopSliderCard from '../SharComponents/TopSliderCard';
import TopNewsSlider from '../SharComponents/TopNewsSlider';
import Link from 'next/link';
import ArticleSkeleton from '../Skeleton/ArticleSkeleton';



const Article = () => {

    const [homeData, setHomeData] = useState(null);


    useEffect(() => {
        fetch("https://wbsoft.work/api/get-homepage-data-for-mobile")
            .then(res => res.json())
            .then(data => setHomeData(data))
    }, []);

    const imgURL = "https://wbsoft.work/storage/uploads/newsImg/";

    if (!homeData) {
        return <ArticleSkeleton />
    }

    return (
        <div className="w-full h-auto mt-8 mx-auto  bg-white  overflow-hidden">
            <div className='w-full   mx-auto sm:mb-12   sm:my-8  shadow-3xl bg-amber-950  '>
                <div >
                    <div className='flex justify-between items-center   p-2 '>
                        <p className='font-bold text-white'>TOP NEWS </p>
                        <div className='flex justify-center items-center gap-2'>
                            <RiTelegram2Fill className='w-8 h-8 bg-white p-2 rounded-full' />
                            <FaWhatsapp className='w-8 h-8 bg-white p-2 rounded-full' />
                            <IoMdShare className='w-8 h-8  p-2 text-white' />
                        </div>
                    </div>

                    {/* Top News Slider  */}

                    <div>

                        <TopNewsSlider imgURL={imgURL} topNewsData={homeData?.brakingNewsData} />
                    </div>


                </div>

                {/* Under breaking news Data  */}

                <div className='w-full  mx-auto sm:mb-12   p-2  shadow-3xl  text-white'>

                    <TopSliderCard imgURL={imgURL} topNavSliderData={homeData?.underBrakingNewsData} />



                </div>
            </div>






            {/* Top Story  */}

            <div className='my-2'>
                <div className="mb-3 flex justify-between">

                    <h2 className=' font-bold'>Top Story</h2>
                    <p className="text-red-500">see all</p>
                </div>
                <div className="card w-full shadow-sm">
                    <Link href={`news-details/${homeData?.topStoryNewsData?.slug_bn}`}>
                        <figure>
                            <Image
                                className='w-full h-full'
                                src={`${imgURL}${homeData?.topStoryNewsData?.photo}`}
                                width={500}
                                height={500}
                                alt='Image'
                            />
                        </figure>
                        <div className="px-2 py-4">

                            <p className='line-clamp-2'>{homeData?.topStoryNewsData?.title_bn}</p>

                        </div>
                    </Link>
                </div>
            </div>


            {/* Top Story Sliding News Data  */}

            <div className="my-4">

                <TopSliderCard imgURL={imgURL} topNavSliderData={homeData?.topStorySlidingNewsData} />
            </div>


            {/* Latest News  */}

            <div className='w-full h-auto mx-auto sm:mb-12 px-2     shadow-3xl bg-white'>
                <div className="mb-3 flex justify-between">

                    <h2 className=' font-bold'>Latest News</h2>
                    <p className="text-red-500">see all</p>
                </div>

                <div>


                    {
                        homeData?.lattestNewsData?.map((cardNews, index) => {
                            return (
                                <div key={index}>
                                    <Link href={`news-details/${cardNews?.slug_bn}`}>
                                        <NewsCard cardNews={cardNews} imgURL={imgURL} />
                                    </Link>

                                </div>
                            )
                        })
                    }

                </div>

            </div>

            {/* রাষ্ট্রীয় খবর */}

            <div className='w-full h-auto mx-auto  px-2     shadow-3xl bg-white'>
                <div className="my-2 flex justify-between">

                    <h2 className=' font-bold'>রাষ্ট্রীয় খবর </h2>
                    <p className="text-red-500">see all</p>
                </div>
                <div className="my-4">

                    <TopSliderCard imgURL={imgURL} topNavSliderData={homeData?.countryWiseNewsData} />
                </div>


            </div>


            {/* Photo Galary  */}

            <div className='w-full h-auto mx-auto  px-2     shadow-3xl bg-white'>
                <div className="my-2 flex justify-between">

                    <h2 className=' font-bold'>Photo Galary </h2>
                    <p className="text-red-500">see all</p>
                </div>
                <SwiperSlider imgURL={imgURL} photoGallaryData={homeData?.photoGalleryNewsData} />
            </div>


            {/* Web Story  */}

            <div className='w-full h-auto mx-auto  px-2     shadow-3xl bg-white'>
                <div className="my-2 flex justify-between">

                    <h2 className=' font-bold'>Web Story </h2>
                    <p className="text-red-500">see all</p>
                </div>
                <SwiperSlider2 imgURL={imgURL} webStoryGallary={homeData?.webStoryNewsData} />
            </div>
            <div className='w-full h-auto mx-auto  px-2     shadow-3xl bg-white'>
                <div className="my-2 flex justify-between">

                    <h2 className=' font-bold'>TV Show </h2>
                    <p className="text-red-500">see all</p>
                </div>
                <SwiperSlider imgURL={imgURL} photoGallaryData={homeData?.photoGalleryNewsData} />
            </div>


            <div className='w-full h-auto mx-auto sm:mb-12 px-2     shadow-3xl bg-white'>
                <div className="mb-3 flex justify-between">

                    <h2 className=' font-bold'>Premium</h2>
                    <p className="text-red-500">see all</p>
                </div>


                <div>


                    {
                        homeData?.lattestNewsData?.map((cardNews, index) => {
                            return (
                                <div key={index}>
                                    <Link href={`news-details/${cardNews?.slug_bn}`}>
                                        <NewsCard cardNews={cardNews} imgURL={imgURL} />
                                    </Link>

                                </div>
                            )
                        })
                    }



                </div>

            </div>
        </div >
    )
}

export default Article