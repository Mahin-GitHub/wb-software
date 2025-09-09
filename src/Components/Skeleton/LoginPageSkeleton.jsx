import React from 'react'

const LoginPageSkeleton = () => {
    return (
        <div>
            <div className="w-full h-auto mx-auto sm:mb-12 px-2 py-4 sm:my-8 border border-gray-300 shadow-sm bg-white animate-pulse rounded-sm max-w-md">
                {/* Heading */}
                <div className="h-8 w-28 bg-base-200 rounded-md mx-auto mb-6"></div>


                {/* Mobile input */}
                <div className="h-12 w-ful rounded-md mb-4 bg-gray-300"></div>


                {/* Password input */}
                <div className="h-12 w-full  rounded-md mb-4 bg-gray-300"></div>


                {/* Remember me + forgot */}
                <div className="flex items-center justify-between my-4">
                    <div className="h-5 w-28 bg-gray-300 rounded-md"></div>
                    <div className="h-4 w-20 bg-gray-300 rounded-md"></div>
                </div>


                {/* Login button */}
                <div className="h-10 w-full bg-gray-300 rounded-md mb-4"></div>


                {/* Register link */}
                <div className="mx-auto h-4 w-40 bg-gray-300  rounded-md"></div>
            </div>
        </div>
    )
}

export default LoginPageSkeleton