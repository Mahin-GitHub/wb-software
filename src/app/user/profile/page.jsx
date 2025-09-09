"use client";
import ProfileSkeleton from '@/Components/Skeleton/ProfileSkeleton';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ProfileReuseCard from './ProfileReuseCard';

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
            <div className='w-full h-auto mx-auto  p-2  border-1 border-gray-300 shadow-sm bg-white rounded-sm my-4 '>
                <div>
                    <ProfileReuseCard text={"MFS Service"} url={"#"} />
                    <div className="border-b border-gray-300 mt-2"></div>
                    <ProfileReuseCard text={"Account Service"} url={"#"} />
                    <div className="border-b border-gray-300 mt-2"></div>
                    <ProfileReuseCard text={"Credit Card Service"} url={"#"} />

                </div>
            </div>
            <div className='w-full h-auto mx-auto  p-2  border-1 border-gray-300 shadow-sm bg-white rounded-sm mb-4 '>
                <div>
                    <ProfileReuseCard text={"Transfer Revert"} url={"#"} />
                    <div className="border-b border-gray-300 mt-2"></div>
                    <ProfileReuseCard text={"Income Expense Revert"} url={"#"} />
                </div>
            </div>
            <div className='w-full h-auto mx-auto  p-2  border-1 border-gray-300 shadow-sm bg-white rounded-sm mb-2'>
                <div>
                    <ProfileReuseCard text={"Change your info"} url={"/user/change-info"} />
                    <div className="border-b border-gray-300 mt-2"></div>
                    <ProfileReuseCard text={"Change your Mobile"} url={"#"} />
                    <div className="border-b border-gray-300 mt-2"></div>
                    <ProfileReuseCard text={"Change your Password"} url={"#"} />
                    <div className="border-b border-gray-300 mt-2"></div>
                    <ProfileReuseCard text={"Logout"} url={"#"} />

                </div>
            </div>
        </>

    )
}

export default Profile