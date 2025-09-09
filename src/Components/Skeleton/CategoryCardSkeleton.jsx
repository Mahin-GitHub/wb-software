"use client";

import React from "react";


const CategoryCardSkeleton = () => {
    return (
        <div className=" sm:mt-10 px-4 animate-pulse">
            <div className="animate-pulse flex justify-center mb-6 bg-gray-400">
                <div className="h-8 w-48 bg-base-200 rounded-md"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
                    <div
                        key={i}
                        className=" shadow rounded-xl p-6 flex items-center justify-center text-center border border-gray-300"
                    >
                        <div className="h-6 w-24 bg-gray-300 rounded-md"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default CategoryCardSkeleton;