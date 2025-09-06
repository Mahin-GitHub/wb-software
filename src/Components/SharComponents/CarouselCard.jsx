import Image from 'next/image'
import React from 'react'

const CarouselCard = ({ sliderData, imgURL }) => {

    const { title_bn, photo } = sliderData;
    return (
        <div className=" w-full h-full rounded-lg  flex flex-col ">
            {/* Image Section */}
            <div className="w-full  ">
                <Image
                    src={

                        `${imgURL}${photo}`
                    }
                    width={500}
                    height={500}
                    alt="cartImg"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Text Section */}
            <div className=" mt-1 flex-1 flex items-start">
                <p className="text-sm line-clamp-3 ">
                    {title_bn}
                </p>
            </div>
        </div>
    )
}

export default CarouselCard