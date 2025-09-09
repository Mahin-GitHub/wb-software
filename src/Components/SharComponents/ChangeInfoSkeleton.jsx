"use client";

const ChangeInfoSkeleton = () => {
    return (
        <div className="w-full h-auto mx-auto p-4 border border-gray-200 shadow-sm bg-white rounded-sm mb-2 animate-pulse">
            {/* Title */}
            <div className="h-6 w-32 bg-gray-300 rounded mx-auto mb-6"></div>

            {/* Name */}
            <div className="mb-4">
                <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                <div className="h-10 w-full bg-gray-300 rounded"></div>
            </div>

            {/* Email */}
            <div className="mb-4">
                <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                <div className="h-10 w-full bg-gray-300 rounded"></div>
            </div>

            {/* Profession */}
            <div className="mb-4">
                <div className="h-4 w-28 bg-gray-300 rounded mb-2"></div>
                <div className="h-10 w-full bg-gray-300 rounded"></div>
            </div>

            {/* Gender */}
            <div className="mb-4">
                <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
                <div className="flex gap-2">
                    <div className="h-10 w-1/2 bg-gray-300 rounded"></div>
                    <div className="h-10 w-1/2 bg-gray-300 rounded"></div>
                </div>
            </div>

            {/* Address */}
            <div className="mb-4">
                <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                <div className="h-10 w-full bg-gray-300 rounded"></div>
            </div>

            {/* Submit Button */}
            <div className="h-10 w-full bg-gray-300 rounded"></div>
        </div>
    );
}


export default ChangeInfoSkeleton;