import React from 'react'


const InputField = ({ icon, type, placeholder }) => {

  return (


    <div className="w-full mb-2 bg-gray-100 rounded-sm">
      <div className="flex items-stretch border rounded-lg overflow-hidden focus-within:ring-4 focus-within:ring-blue-300">

        {/* Icon Section */}
        <div className="bg-[#ECECEC] flex items-center justify-center px-3">
          {icon}
        </div>

        {/* Input Field Section */}
        <input
          type={type}
          placeholder={placeholder}
          className="flex-1 bg-white pl-1 pr-3 py-2 outline-none text-gray-700"
        />

      </div>
    </div>



  )
}

export default InputField