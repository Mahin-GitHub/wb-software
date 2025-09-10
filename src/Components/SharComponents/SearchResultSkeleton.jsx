import React from 'react';

const SearchResultSkeleton = ({ resultsCount = 5 }) => {
    return (
        <div className="w-full animate-pulse mt-8 sm:mt-12">
            {/* Optional: search bar skeleton */}
          

            {/* Search results skeleton */}
            
            <div className="grid grid-cols-1 gap-4">
                {Array(resultsCount)
                    .fill(0)
                    .map((_, index) => (
                        <div key={index} className="w-full h-48 bg-gray-300 rounded-md" />
                    ))}
            </div>
        </div>
    );
};

export default SearchResultSkeleton;
