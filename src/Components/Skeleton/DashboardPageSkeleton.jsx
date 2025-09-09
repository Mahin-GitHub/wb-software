import React from 'react'

const DashboardPageSkeleton = () => {
    return (
        <div className="w-full animate-pulse space-y-6 px-2 py-4 sm:mb-12 sm:mt-8">


            {/* Wallet & Transfer Section */}
            <div className="w-full flex flex-col sm:flex-row justify-around border border-gray-300 shadow bg-white rounded-lg p-4 gap-4">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex-1 space-y-2">
                        <div className="h-6 w-32 bg-gray-300 rounded mx-auto"></div>
                        <div className="h-4 w-24 bg-gray-300 rounded mx-auto"></div>
                        <div className="h-6 w-16 bg-gray-300 rounded mx-auto"></div>
                        <div className="h-10 w-full bg-gray-300 rounded"></div>
                    </div>
                ))}
            </div>


            {/* Dashboard Cards Section */}
            {[...Array(2)].map((_, i) => (
                <div key={i} className="w-full border border-gray-300 shadow bg-white rounded-lg p-4 space-y-2">
                    <div className="h-6 w-32 bg-gray-300 rounded"></div>
                    <div className="flex justify-around mt-2 gap-4">
                        {[...Array(3)].map((_, j) => (
                            <div key={j} className="h-10 w-10 bg-gray-300 rounded-full mx-auto"></div>
                        ))}
                    </div>
                </div>
            ))}


            {/* Expense Section */}
            <div className="space-y-2">
                <div className="h-6 w-28 bg-gray-300 rounded"></div>
                <div className="flex justify-around border border-gray-300 shadow bg-white rounded-lg p-4 gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex-1 space-y-2">
                            <div className="h-10 w-10 bg-gray-300 rounded-full mx-auto"></div>
                            <div className="h-4 w-16 bg-gray-300 rounded mx-auto"></div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Beneficiary Section */}
            <div className="space-y-2">
                <div className="h-6 w-36 bg-gray-300 rounded"></div>
                <div className="flex justify-around border border-gray-300 shadow bg-white rounded-lg p-4 gap-4">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex-1 space-y-2">
                            <div className="h-10 w-10 bg-gray-300 rounded-full mx-auto"></div>
                            <div className="h-4 w-24 bg-gray-300 rounded mx-auto"></div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Calculator Section */}
            <div className="space-y-2">
                <div className="h-6 w-28 bg-gray-300 rounded"></div>
                <div className="flex justify-around border border-gray-300 shadow bg-white rounded-lg p-4 gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex-1 space-y-2">
                            <div className="h-10 w-10 bg-gray-300 rounded-full mx-auto"></div>
                            <div className="h-4 w-16 bg-gray-300 rounded mx-auto"></div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Others Section */}
            <div className="space-y-2">
                <div className="h-6 w-28 bg-gray-300 rounded"></div>
                <div className="flex justify-around border border-gray-300 shadow bg-white rounded-lg p-4 gap-4">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex-1 space-y-2">
                            <div className="h-10 w-10 bg-gray-300 rounded-full mx-auto"></div>
                            <div className="h-4 w-16 bg-gray-300 rounded mx-auto"></div>
                        </div>
                    ))}
                </div>
            </div>


        </div>

    )
}

export default DashboardPageSkeleton