import React from 'react'

const SearchPageSkeleton = () => {
    return (
        <div>
            <div className="w-full animate-pulse">
                {/* Search Bar */}
                <div className="w-full mt-8 sm:mt-20 flex justify-center">
                    <div className="flex justify-center items-center gap-4 w-full max-w-2xl">
                        {/* Search icon */}
                        <div className="w-6 h-6 bg-gray-300 rounded-full" />

                        {/* Input placeholder */}
                        <div className="flex-1">
                            <div className="h-10 w-full bg-gray-300 rounded-md" />
                        </div>

                        {/* Button placeholder */}
                        <div className="h-10 w-24 bg-gray-300 rounded-md" />
                    </div>
                </div>

                {/* Results */}
                <div className="mt-10 space-y-6">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="card w-full shadow-md border border-gray-200 rounded-lg overflow-hidden max-w-2xl mx-auto"
                        >
                            {/* Image */}
                            <div className="w-full h-48 bg-gray-300" />

                            {/* Text */}
                            <div className="px-3 py-4 space-y-2">
                                <div className="h-4 bg-gray-300 rounded w-4/5" />
                                <div className="h-4 bg-gray-300 rounded w-2/3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchPageSkeleton