import Image from 'next/image'
import React from 'react'

const SingleCard = () => {
    return (
        <div>
            <div className=" w-full h-full shadow-sm rounded-2xl overflow-hidden">

                <Image
                    className='w-full h-[200px]'
                    src={"/assets/newsBanner2.jpg"}
                    width={500}
                    height={500}
                    alt='Image'
                />

                <div className="card-body">

                    <p className='line-clamp-2'>A card component has a figure, a body part, and inside body there are title and actions parts sdfjsdfkjsdkfjklsdjfklsdjfklsdjfklsjfklsdjkl</p>

                </div>
            </div>

        </div>
    )
}

export default SingleCard