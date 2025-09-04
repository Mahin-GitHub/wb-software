import Image from 'next/image'
import React from 'react'

const CarouselCart2 = () => {
    return (
        <div>
            <div className="card w-[150px] h-[150px] shadow-sm">
                <figure>
                    <Image
                        className='w-full h-full'
                        src={"/assets/newsBanner2.jpg"}
                        width={500}
                        height={500}
                        alt='Image'
                    />
                </figure>
                <div className="p-2">

                    <p className='line-clamp-2'>A card component has a figure, a body part, and inside body there are title and actions parts sdfjsdfkjsdkfjklsdjfklsdjfklsdjfklsjfklsdjkl</p>

                </div>
            </div>
        </div>
    )
}

export default CarouselCart2