import Image from 'next/image'
import React from 'react'

const TopNavBar = () => {
    return (
        <div >
            {/* Top Logo */}
            <div className='w-full px-2 py-4 flex justify-center '>
                <div className="w-[220px]">
                    <Image
                        className="w-full h-auto"
                        src="/assets/logo.png"
                        width={1000}
                        height={1000}
                        alt="logo"
                    />
                </div>
            </div>
        </div >
    )
}

export default TopNavBar