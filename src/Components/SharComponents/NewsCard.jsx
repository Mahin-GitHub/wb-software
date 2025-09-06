import Image from 'next/image'
import React from 'react'

const NewsCard = ({ normalData,imgURL }) => {
    // const { title_bn,photo} = normalData;
    return (
        <div>
            <div className='w-full flex justify-between items-center gap-4 shadow-sm mb-2 py-2'>
                <div className='w-3/4 break-words'>

                    <p className='wrap-break-word line-clamp-3'>{normalData?.title_bn}</p>
                </div>
                <div className=" w-1/4">
                    <Image
                        src={
                            normalData?.photo?.startsWith("http") ? photo
                                : "/assets/newsBanner2.jpg" }
                        width={500}
                        height={500}
                        alt="cartImg"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

            </div>
        </div>
    )
}

export default NewsCard