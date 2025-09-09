"use client";
import ContactPageSkeleton from '@/Components/Skeleton/ContactPageSkeleton';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { IoLocationSharp } from "react-icons/io5";
import { SiPaloaltosoftware } from "react-icons/si";

const Contact = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (showSkeleton) {
    return <ContactPageSkeleton />;
  }
  return (
    <div className='w-full h-auto mx-auto sm:mb-12 px-2  py-4 sm:my-8 bg-white' >

      <Link href={"#"}>
        <div className='w-full h-full mx-auto mb-4  p-4 border-1 border-gray-300 shadow-3xl bg-white '>
          <h2 className='text-orange-400 font-semibold text-3xl text-center'>About Us</h2>
          <p className='text-sm'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.

          </p>
        </div>
      </Link>

      <Link href={"#"}>
        <div className='w-full h-full mx-auto  p-4 border-1 border-gray-300 shadow-3xl bg-white '>

          <section className='mb-2'>
            <SiPaloaltosoftware className='text-2xl text-orange-500' />

            <p className=' font-semibold text-xl '>Wb Software</p>
          </section>
          <section>
            <IoLocationSharp className='text-2xl text-orange-500' />

            <p className=' font-semibold text-xl '>House# 433, Flat# 3B, Road# 30, New DOHS Mohakhali, Dhaka</p>

          </section>


        </div>
      </Link>
    </div >
  )
}

export default Contact