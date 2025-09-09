"use client";
import ProfileSkeleton from '@/Components/Skeleton/ProfileSkeleton';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [showSkeleton, setShowSkeleton] = useState(true);
    useEffect(() => {

        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (showSkeleton) {
        return <ProfileSkeleton />;
    }

    return (
        <>
            <div className='w-full h-auto mx-auto  p-2  border-1 border-gray-300 shadow-3xl bg-white rounded-sm '>

                <div className='flex justify-start items-center gap-4'>
                    <div className='w-[130px] h-[130px] border'>
                        <Image className='w-full h-full'
                            src={"/assets/profile.jpg"}
                            width={500}
                            height={500}
                            alt='Profile Pic'>
                        </Image>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">MD. MIRAJ HOSSEN MAHIN</h2>
                        <p className='text-sm'>01761823647</p>
                        <p className='text-sm'>Male</p>
                        <p className='text-sm'>Software Engineer</p>
                    </div>


                </div>
            </div >
        </>

    )
}

export default Profile