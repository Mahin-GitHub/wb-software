import React from 'react'
import { MdAdminPanelSettings } from 'react-icons/md'

const InputField = ({ icon, type, placeholder }) => {

    return (
        <div className=" w-full mb-4 flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-300">
            {/* <FaPhoneAlt className="text-gray-500 mr-2" /> */}
            {icon}
            <input
                type={type}
                placeholder={placeholder}
                className="w-full outline-none"
            />
        </div>
    )
}

export default InputField