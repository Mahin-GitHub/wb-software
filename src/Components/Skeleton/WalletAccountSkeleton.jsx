import React from 'react'

const WalletAccountSkeleton = () => {
    return (
        <div>
            <div className="w-full h-auto mx-autopy-4 p-2 border border-gray-300 shadow-sm bg-white animate-pulse">

                {/* Title Placeholder */}
                <div className="flex justify-center items-center w-full mb-2">
                    <div className="w-full h-8 bg-gray-300 rounded-sm"></div>
                </div>

                {/* Text Placeholder */}
                <div className="flex justify-center items-center w-full mb-4">
                    <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                </div>

                {/* Button Placeholder */}
                <div className="flex justify-center items-center w-full">
                    <div className="w-full h-10 bg-gray-300 rounded-sm"></div>
                </div>

            </div>
        </div>
    )
}

export default WalletAccountSkeleton