
"use client";

import ChangeInfoSkeleton from "@/Components/SharComponents/ChangeInfoSkeleton";
import InputField from "@/Components/SharComponents/InputField";
import { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaBriefcase, FaMapMarkerAlt, FaMars, FaVenus } from "react-icons/fa";


const ChangeInfo = () => {
    const [gender, setGender] = useState("Male");
    const [showSkeleton, setShowSkeleton] = useState(true);
    useEffect(() => {

        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (showSkeleton) {
        return <ChangeInfoSkeleton />;
    }
    return (
        <div className='w-full h-auto mx-auto  p-4  border-1 border-gray-300 shadow-sm bg-white rounded-sm mb-2'>
            <div className="">
                {/* Title */}
                <h2 className="text-xl font-bold text-center text-orange-500 ">
                    Change Info
                </h2>

                {/* Name */}
                <label className="block mb-1 text-sm font-semibold text-gray-700">
                    Name <span className="text-red-500">(required)</span>
                </label>

                <InputField icon={<FaUser className="text-[#666666] " />} type={"text"} placeholder={"User Name"} />

                {/* Email */}
                <label className="block mb-1 text-sm font-semibold text-gray-700">
                    Email <span className="text-red-500">(required)</span>
                </label>

                <InputField icon={<FaEnvelope className="text-[#666666] " />} type={"email"} placeholder={"User Email"} />

                {/* Profession */}

                <div className="mb-4 ">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profession <span className="text-red-500">(required)</span>
                    </label>
                    <select className="w-full border  rounded-lg p-2 text-gray-700 focus-within:ring-4 focus-within:ring-blue-300">
                        <option value="14" data-select2-id="select2-data-8-x2z9">Pharmacist</option>
                        <option >Digital Marketer</option>
                        <option >Architect</option>
                        <option >Nurse</option>
                        <option >Accountant</option>
                        <option >Data Scientist</option>
                        <option >Civil Engineer</option>
                        <option >Mechanical Engineer</option>
                        <option >Graphic Designer</option>
                        <option >Business Analyst</option>
                        <option >Lawyer</option>
                        <option >Teacher</option>
                        <option >Doctor</option>
                        <option >Software Engineer</option>
                    </select>
                </div>

                {/* Gender */}
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Gender <span className="text-red-500">(required)</span>
                </label>
                <div className="flex gap-2 mb-4">
                    <button
                        type="button"
                        onClick={() => setGender("Male")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 border rounded-md ${gender === "Male"
                            ? "bg-orange-500 text-white"
                            : "border-orange-400 text-orange-500"
                            }`}
                    >
                        <FaMars /> Male
                    </button>
                    <button
                        type="button"
                        onClick={() => setGender("Female")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 border rounded-md ${gender === "Female"
                            ? "bg-orange-500 text-white"
                            : "border-orange-400 text-orange-500"
                            }`}
                    >
                        <FaVenus /> Female
                    </button>
                </div>

                {/* Address */}
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Address <span className="text-red-500">(required)</span>
                </label>


                <InputField icon={<FaMapMarkerAlt className="text-[#666666] " />} type={"text"} placeholder={"User Address"} />

                {/* Submit */}
                <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition">
                    Update
                </button>
            </div>
        </div>
    )
}

export default ChangeInfo




