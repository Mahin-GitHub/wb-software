import React from 'react'

const SearchCardSkeleton = ({ resultsCount = 5 }) => {
    return (
        <div>

            <div className="grid grid-cols-1 gap-4">
                {Array(resultsCount)
                    .fill(0)
                    .map((_, index) => (
                        <div key={index} className="w-full h-48 bg-gray-300 rounded-md" />
                    ))}
            </div>
        </div>
    )
}

export default SearchCardSkeleton