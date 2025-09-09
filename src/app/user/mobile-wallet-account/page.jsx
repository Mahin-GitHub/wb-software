"use client";
import WalletAccountSkeleton from '@/Components/Skeleton/WalletAccountSkeleton';
import React, { useEffect, useState } from 'react'

const MobileWalletAccount = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (showSkeleton) {
    return <WalletAccountSkeleton />;
  }
  return (
    <div className='w-full h-auto mx-auto p-2   border-1 border-gray-300 shadow-sm bg-white rounded-sm'>
      <div className='flex justify-center items-center w-full mb-2'>

        <h2 className='w-full bg-orange-400 p-2 text-white text-center text-lg font-bold rounded-sm'>Sorry, Account Not Found.!</h2>
      </div>

      <p className='text-center text-lg'>No available account. To create an account click the link below.</p>
      <div className='flex justify-center items-center w-full mb-2'>

        <button className='w-full bg-orange-400 p-2 text-white font-semibold rounded-sm'>Transaction</button>
      </div>
    </div>
  )
}

export default MobileWalletAccount