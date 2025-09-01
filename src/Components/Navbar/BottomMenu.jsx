"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const BottomMenu = ({ item }) => {
  const { icon, text, path_url } = item;


  const pathname = usePathname();
  const isActive = pathname === path_url;

  return (
    <div>
      <div className='px-1 py-2 '>
        <Link className={`font-bold flex flex-col justify-center items-center ${isActive ? 'text-orange-500' : 'text-gray-700'
          }`} href={path_url}>
          <div className='text-xl '>{icon}</div>
          <span>{text}</span>
        </Link>
      </div>
    </div>
  )
}

export default BottomMenu