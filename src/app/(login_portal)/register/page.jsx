"use client"
import InputField from '@/Components/SharComponents/InputField'
import RegisterPageSkeleton from '@/Components/Skeleton/RegisterPageSkeleton'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBriefcase, FaEnvelope, FaEye, FaLock, FaMapMarkerAlt, FaMars, FaPhoneAlt, FaUser, FaVenus, FaWallet } from 'react-icons/fa'

const Register = () => {
    const [selected, setSelected] = useState("male");
    const [showSkeleton, setShowSkeleton] = useState(true);
    useEffect(() => {

        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (showSkeleton) {
        return <RegisterPageSkeleton />;
    }
    return (

        <div className='w-full h-auto mx-auto sm:mb-12 px-2  py-4 sm:my-8 border-1 border-gray-300 shadow-sm rounded-sm bg-white'>


            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-orange-500 mb-2">Registration</h2>

            {/* Name */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">(required)</span>
                </label>

                <InputField type={"text"} icon={<FaUser className="text-[#666666] " />} placeholder={"Name"} />

            </div>

            {/* Mobile */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile <span className="text-red-500">(required)</span>
                </label>

                <InputField type={"number"} placeholder={"Mobile"} icon={<FaPhoneAlt className="text-[#666666] " />} />
            </div>

            {/* Email */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">(required)</span>
                </label>

                <InputField type={"email"} placeholder={"Email"} icon={<FaEnvelope className="text-[#666666] " />} />
            </div>

            {/* Gender */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender <span className="text-red-500">(required)</span>
                </label>


                <div className="flex gap-2">
                    <button
                        onClick={() => setSelected("male")}
                        className={`flex-1 py-2 rounded-md flex items-center justify-center gap-2 ${selected === "male"
                            ? "bg-orange-500 text-white"
                            : "border border-orange-500 text-orange-500"
                            }`}
                    >
                        <FaMars /> Male
                    </button>

                    <button
                        onClick={() => setSelected("female")}
                        className={`flex-1 py-2 rounded-md flex items-center justify-center gap-2 ${selected === "female"
                            ? "bg-orange-500 text-white"
                            : "border border-orange-500 text-orange-500"
                            }`}
                    >
                        <FaVenus /> Female
                    </button>
                </div>
            </div>

            {/* Profession */}
          
            <div className="mb-4 ">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profession <span className="text-red-500">(required)</span>
                </label>

                <div className="w-full mb-2 bg-gray-100 rounded-sm">

                    <div className="flex items-stretch border rounded-lg overflow-hidden focus-within:ring-4 focus-within:ring-blue-300">

                        {/* Icon Section */}
                        <div className="bg-[#ECECEC] flex items-center justify-center px-3">
                            <FaBriefcase className="text-[#666666]" />
                        </div>

                        {/* Select Field Section */}
                        <select
                            className="flex-1 bg-white pl-1 pr-3 py-2 outline-none text-gray-700"
                        >
                            <option value="Pharmacist">Pharmacist</option>
                            <option value="Digital Marketer">Digital Marketer</option>
                            <option value="Architect">Architect</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Accountant">Accountant</option>
                            <option value="Data Scientist">Data Scientist</option>
                            <option value="Civil Engineer">Civil Engineer</option>
                            <option value="Mechanical Engineer">Mechanical Engineer</option>
                            <option value="Graphic Designer">Graphic Designer</option>
                            <option value="Business Analyst">Business Analyst</option>
                            <option value="Lawyer">Lawyer</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Software Engineer">Software Engineer</option>
                        </select>
                    </div>
                </div>

            </div>


            {/* Wallet Balance */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Wallet Balance <span className="text-red-500">(required)</span>
                </label>

                <InputField type={"number"} placeholder={"Wallte Balance"} icon={<FaWallet className="text-[#666666] " />} />
            </div>

            {/* Address */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address <span className="text-red-500">(required)</span>
                </label>


                <InputField type={"text"} placeholder={"Address"} icon={<FaMapMarkerAlt className="text-[#666666] " />} />
            </div>

            {/* Password */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password <span className="text-red-500">(required)</span>
                </label>

                <InputField type={"password"} placeholder={"Password"} icon={<FaLock className="text-[#666666] " />} />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password <span className="text-red-500">(required)</span>
                </label>


                <InputField type={"password"} placeholder={"Confirm Password"} icon={<FaLock className="text-[#666666] " />} />
            </div>

            {/* Terms & Conditions */}
            <div className="mb-4 flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-blue-500 w-5 h-5" />
                <span>Agree with <Link href="/privacy/policy" className="text-orange-500 hover:underline">Terms & Conditions</Link></span>
            </div>

            {/* Registration Button */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-md mb-2">
                Registration
            </button>

            {/* Login link */}
            <p className="text-center text-sm">
                Already have an account? <Link href="/login" className="text-orange-500 hover:underline">login</Link>
            </p>
        </div>



    )
}

export default Register