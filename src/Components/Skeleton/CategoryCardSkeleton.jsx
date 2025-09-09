"use client";

import React from "react";


const CategoryCardSkeleton = () => {
    return (
        <div className="my-10 sm:mb-10 sm:mt-20 px-4 animate-pulse">
            <div className="animate-pulse flex justify-center mb-6">
                <div className="h-8 w-48 bg-base-200 rounded-md"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                    <div
                        key={i}
                        className="bg-base-200 shadow rounded-xl p-6 flex items-center justify-center text-center border"
                    >
                        <div className="h-6 w-24 bg-base-300 rounded-md"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default CategoryCardSkeleton;