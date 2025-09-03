import React from 'react'


const DashboardCard = ({ title, icon1, icon2, icon3, iconName1, iconName2, iconName3 }) => {
    return (

        <div>
            <h2 className="font-semibold text-2xl my-2">{title}</h2>

            <div className="w-full h-auto mx-auto sm:mb-12 px-2 py-4 sm:my-8 
                  border border-gray-300 shadow-sm bg-white 
                  flex justify-around items-center text-center">

                {/* 1st Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    {icon1}
                    <p>{iconName1}</p>
                </div>

                {/* Middle Border */}
                <div className="w-px bg-gray-300 h-12 mx-2"></div>

                {/* 2nd Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    {icon2}
                    <p>{iconName2}</p>
                </div>

                {/* Middle Border */}
                <div className="w-px bg-gray-300 h-12 mx-2"></div>

                {/* 3rd Column */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    {icon3}
                    <p>{iconName3}</p>
                </div>
            </div>
        </div>

    )
}

export default DashboardCard