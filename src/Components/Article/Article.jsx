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



const Article = () => {

    const [homeData, setHomeData] = useState({});

    useEffect(() => {
        fetch("https://wbsoft.work/api/get-homepage-data-for-mobile")
            .then(res => res.json())
            .then(data => setHomeData(data))
    }, []);

    const imgURL = "https://wbsoft.work/storage/uploads/newsImg/"

    console.log("Data --> ", homeData);
    return (
        <div className="w-full h-auto mx-auto  bg-white  overflow-hidden">
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


                <div className='w-full  mx-auto sm:mb-12   p-2  shadow-3xl  text-white'>

                    <TopSliderCard imgURL={imgURL} topNavSliderData={homeData?.underBrakingNewsData} />


                    {/* </div> */}
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
            {/* <div className='my-4 flex items-center gap-4 '>

                <CarouselCart2 />

            </div> */}
            <div className="my-4">

                <TopSliderCard imgURL={imgURL} topNavSliderData={homeData?.sliderNewsData} />
            </div>


            <div className='w-full h-auto mx-auto sm:mb-12 px-2     shadow-3xl bg-white'>
                <div className="mb-3 flex justify-between">

                    <h2 className=' font-bold'>Normal News</h2>
                    <p className="text-red-500">see all</p>
                </div>

                <div>
                    {
                        homeData?.normalNewsData?.map((normalData, index) => {
                            return (
                                <div key={index}>
                                    <NewsCard normalData={normalData} imgURL={imgURL} />
                                </div>
                            )
                        })
                    }


                </div>

            </div>

            <div className='w-full h-auto mx-auto  px-2     shadow-3xl bg-white'>
                <div className="my-2 flex justify-between">

                    <h2 className=' font-bold'>রাষ্ট্রীয় খবর </h2>
                    <p className="text-red-500">see all</p>
                </div>

                {/* <div className='my-4 flex items-center gap-4 '>

                    <CarouselCart2 />
                    <CarouselCart2 />
                    <CarouselCart2 />
                    <CarouselCart2 />
                    <CarouselCart2 />
                </div> */}
                <TopSliderCard imgURL={imgURL} topNavSliderData={homeData?.sliderNewsData} />


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