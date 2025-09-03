import DashboardCard from '@/Components/SharComponents/DashboardCard';
import React from 'react'
import { BsBank } from 'react-icons/bs';
import { FaAddressCard, FaCalculator, FaPercent, FaRegCreditCard, FaWallet } from 'react-icons/fa';
import { FaImages, FaMobileScreen } from "react-icons/fa6";
import { IoDocumentTextSharp } from 'react-icons/io5';

const Dashboard = () => {
    return (

        <div className='w-full h-auto mx-auto sm:mb-12 px-2  py-4 sm:mt-8  bg-white'>
            <div className='w-full h-auto mx-auto px-2 py-4  
                  border border-gray-300 shadow-sm bg-white 
                  flex justify-around items-center text-center'>
                <div className='grid grid-cols-2  justify-center  gap-4'>
                    <div className='p-2'>
                        <h2 className='font-semibold text-2xl text-center mb-2'>Wallet</h2>
                        <div className='flex justify-start items-center gap-2'>
                            <FaImages />
                            <p> Current Balance</p>
                        </div>
                        <p className='text-center mb-2'>0TK</p>
                        <div className='flex justify-center items-center w-full mb-2'>

                            <button className='w-full bg-orange-400 p-2 text-white font-semibold rounded-lg'>Transaction</button>
                        </div>
                    </div>
                    <div className='border-l-2'>
                        <div className="p-2 ml-3 ">
                            <h2 className='font-semibold text-2xl text-center mb-2'>Transfer To</h2>
                            <div className='flex justify-center items-center w-full mb-2'>

                                <button className='w-full bg-orange-400 p-2 text-white font-semibold rounded-lg'>MFS</button>
                            </div>

                            <div className='flex justify-center items-center w-full mb-2 border-t-2 '>

                                <button className='w-full bg-orange-400 p-2 text-white font-semibold rounded-lg mt-1'>Account</button>
                            </div>
                            <div className='flex justify-center items-center w-full mb-2 border-t-2'>

                                <button className='w-full bg-orange-400 p-2 text-white font-semibold rounded-lg mt-1'>Card</button>
                            </div>


                        </div>

                    </div>
                </div>

            </div>


            <DashboardCard title={"My Accounts"}
                icon1={<FaMobileScreen className='text-xl font-bold w-8 h-8 text-orange-400' />}
                iconName1={"MFS"}
                icon2={<BsBank className='text-xl font-bold w-8 h-8 text-orange-400' />}
                iconName2={"Bank"}
                icon3={<FaRegCreditCard className='text-xl font-bold w-8 h-8 text-orange-400' />}
                iconName3={"Credit Card"}
            />
            <DashboardCard title={"Income"}
                icon2={<FaMobileScreen className='text-xl font-bold w-8 h-8 text-orange-400' />}
                iconName2={"MFS"}
                icon1={<FaWallet className='text-xl font-bold w-8 h-8 text-orange-400' />}
                iconName1={"Credit Card"}
                icon3={<BsBank className='text-xl font-bold w-8 h-8 text-orange-400' />}
                iconName3={"Bank"}
            />
            {/* Expence  */}

            <h2 className="font-semibold text-2xl my-2">Expense</h2>

            <div className="w-full h-auto mx-auto px-2 py-4  
                  border border-gray-300 shadow-sm bg-white 
                  flex justify-around items-center text-center">

                {/* 1st Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <FaWallet className='text-xl font-bold w-8 h-8 text-orange-400' />
                    <p>Wallet</p>
                </div>

                {/* Middle Border */}
                <div className="w-px bg-gray-300 h-12 mx-2"></div>

                {/* 2nd Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <FaMobileScreen className='text-xl font-bold w-8 h-8 text-orange-400' />
                    <p>MFS</p>
                </div>

                {/* Middle Border */}
                <div className="w-px bg-gray-300 h-12 mx-2"></div>

                {/* 3rd Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <BsBank className='text-xl font-bold w-8 h-8 text-orange-400' />
                    <p>Bank</p>
                </div>
                {/* Middle Border */}
                <div className="w-px bg-gray-300 h-12 mx-2"></div>

                {/* 3rd Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <FaRegCreditCard className='text-xl font-bold w-8 h-8 text-orange-400' />
                    <p>Credit Catd</p>
                </div>
            </div>

            {/* Beneficiary */}

            <h2 className="font-semibold text-2xl my-2">Benificiary</h2>

            <div className="w-full h-auto mx-auto  px-2 py-4  
                  border border-gray-300 shadow-sm bg-white 
                  flex justify-around items-center text-center">

                {/* 1st Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <FaMobileScreen className='text-xl font-bold w-8 h-8 text-orange-400' />
                    <p>MFS Beneficiary</p>
                </div>

                {/* Middle Border */}
                <div className="w-px bg-gray-300 h-12 mx-2"></div>

                {/* 2nd Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <BsBank className='text-xl font-bold w-8 h-8 text-orange-400' />
                    <p>Bank Beneficiary</p>
                </div>


            </div>


            {/* Calculator  */}
            <h2 className="font-semibold text-2xl my-2">Calculator</h2>

            <div className="w-full h-auto mx-autopx-2 py-4 
                  border border-gray-300 shadow-sm bg-white 
                  flex justify-around items-center text-center">

                {/* 1st Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <FaRegCreditCard className='text-xl font-bold w-8 h-8 text-orange-400' />
                    <p>DBR</p>
                </div>

                {/* Middle Border */}
                <div className="w-px bg-gray-300 h-12 mx-2"></div>

                {/* 2nd Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <FaWallet className='text-xl font-bold w-8 h-8 text-orange-400' />
                    <p>Loan EMI</p>
                </div>
                {/* Middle Border */}
                <div className="w-px bg-gray-300 h-12 mx-2"></div>

                {/* 2nd Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <FaCalculator className='text-xl font-bold w-8 h-8 text-orange-400' />
                    <p>Card EMI</p>
                </div>
                {/* Middle Border */}
                <div className="w-px bg-gray-300 h-12 mx-2"></div>

                {/* 2nd Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <FaPercent className='text-xl font-bold w-8 h-8 text-orange-400' />
                    <p>Trade</p>
                </div>


            </div>

            {/* Others  */}

            <h2 className="font-semibold text-2xl my-2">Others</h2>

            <div className="w-full h-auto mx-auto  px-2 py-4 
                  border border-gray-300 shadow-sm bg-white 
                  flex justify-around items-center text-center">

                {/* 1st Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <FaAddressCard className='text-xl font-bold w-8 h-8 text-orange-400' />
                    <p>About</p>
                </div>

                {/* Middle Border */}
                <div className="w-px bg-gray-300 h-12 mx-2"></div>

                {/* 2nd Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <IoDocumentTextSharp className='text-xl font-bold w-8 h-8 text-orange-400' />
                    <p>Documentation</p>
                </div>



            </div>
        </div>

    )
}

export default Dashboard