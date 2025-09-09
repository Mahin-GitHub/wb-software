import React from 'react'

const SearchPageSkeleton = () => {
    return (
        <div>
            <div className="w-full animate-pulse  mt-8 sm:mt-12">
                <div className="flex justify-center items-center gap-4">
                    {/* Search Bar */}
                    <div className="flex justify-center items-center gap-4 w-full max-w-2xl">
                        {/* Search Icon Placeholder */}
                        <div className="w-6 h-6 bg-gray-300 rounded-full" />

                        {/* Input Placeholder */}
                        <div className="flex-1">
                            <div className="h-10 w-full bg-gray-300 rounded-md" />
                        </div>

                        {/* Button Placeholder */}
                        <div className="h-10 w-24 bg-gray-300 rounded-md" />
                    </div>
                </div>


               

            </div>
        </div>
    )
}

export default SearchPageSkeleton