import React from 'react';

const SearchPageSkeleton = () => {
    return (
        <div className="w-full animate-pulse mt-8 sm:mt-12">
            {/* Optional: search bar skeleton */}
            <div className="flex justify-center items-center gap-4 mb-8">
                <div className="w-6 h-6 bg-gray-300 rounded-full" />
                <div className="flex-1">
                    <div className="h-10 w-full bg-gray-300 rounded-md" />
                </div>
                <div className="h-10 w-24 bg-gray-300 rounded-md" />
            </div>

            {/* Search results skeleton */}

            {/* <div className="grid grid-cols-1 gap-4">
                {Array(resultsCount)
                    .fill(0)
                    .map((_, index) => (
                        <div key={index} className="w-full h-48 bg-gray-300 rounded-md" />
                    ))}
            </div> */}

            {/* <div className="w-full animate-pulse mt-8 sm:mt-12">
                {results.length > 0 && (
                    <div className="grid grid-cols-1 gap-4">
                        {Array(resultsCount)
                            .fill(0)
                            .map((_, index) => (
                                <div key={index} className="w-full h-48 bg-gray-300 rounded-md" />
                            ))}
                    </div>
                )}
            </div> */}

        </div>
    );
};

export default SearchPageSkeleton;
