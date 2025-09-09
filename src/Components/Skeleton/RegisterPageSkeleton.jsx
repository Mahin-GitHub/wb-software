import React from 'react'

const RegisterPageSkeleton = () => {
    return (
        <div>
            <div className="w-full h-auto mx-auto sm:mb-12 px-2 py-4 sm:my-8 border border-gray-300 shadow-3xl bg-white animate-pulse rounded-xl max-w-lg">
                {/* Title */}
                <div className="h-8 w-36 bg-base-200 rounded-md mx-auto mb-6"></div>


                {/* Input fields skeleton */}
                {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
                    <div key={i} className="mb-4 space-y-2">
                        <div className="h-4 w-28 bg-base-200 rounded-md"></div>
                        <div className="h-12 w-full bg-base-200 rounded-md"></div>
                    </div>
                ))}


                {/* Gender Buttons */}
                <div className="mb-4 space-y-2">
                    <div className="h-4 w-28 bg-base-200 rounded-md"></div>
                    <div className="flex gap-2">
                        <div className="flex-1 h-10 bg-base-200 rounded-md"></div>
                        <div className="flex-1 h-10 bg-base-200 rounded-md"></div>
                    </div>
                </div>


                {/* Profession select */}
                <div className="mb-4 space-y-2">
                    <div className="h-4 w-28 bg-base-200 rounded-md"></div>
                    <div className="h-12 w-full bg-base-200 rounded-md"></div>
                </div>


                {/* Terms & Conditions */}
                <div className="mb-4 flex items-center gap-2">
                    <div className="h-5 w-5 bg-base-200 rounded-md"></div>
                    <div className="h-4 w-40 bg-base-200 rounded-md"></div>
                </div>


                {/* Registration Button */}
                <div className="h-10 w-full bg-base-200 rounded-md mb-4"></div>


                {/* Login link */}
                <div className="h-4 w-48 bg-base-200 rounded-md mx-auto"></div>
            </div>
        </div>
    )
}

export default RegisterPageSkeleton