import Image from 'next/image'
import React from 'react'

const CarouselCard = () => {
    return (
        <div className="w-[150px] h-[140px]  rounded-lg  flex flex-col ">
            {/* Image Section */}
            <div className="w-full h-[80px] ">
                <Image
                    src="/assets/newsBanner2.jpg"
                    width={500}
                    height={500}
                    alt="cartImg"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Text Section */}
            <div className=" mt-1 flex-1 flex items-start">
                <p className="text-sm line-clamp-3 ">
                    মমতাকে কৃত্তিত্ব তৃণমূলের, BJP বলল, ফকজসদফল্যফেজ sdfsdfsdfsdfsdfsdfsfsdfsdfdsfsdfsdfsdfsdfsdfsdfsdfftertedsd
                </p>
            </div>
        </div>
    )
}

export default CarouselCard