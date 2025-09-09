import React from 'react'

const ProfileSkeleton = () => {
    return (
        <div> <div className="w-full h-auto mx-auto sm:mb-12 px-2 py-4 sm:my-8 border border-gray-300 shadow-lg bg-white animate-pulse">

            <div className="flex justify-start items-center gap-4">
                {/* Profile Image Placeholder */}
                <div className="w-[130px] h-[130px] bg-gray-300 rounded-sm border" />

                {/* Profile Info Placeholder */}
                <div className="flex flex-col justify-center gap-2 w-full">
                    <div className="h-6 w-48 bg-gray-300 rounded"></div> {/* Name */}
                    <div className="h-4 w-32 bg-gray-300 rounded"></div> {/* Phone */}
                    <div className="h-4 w-24 bg-gray-300 rounded"></div> {/* Gender */}
                    <div className="h-4 w-40 bg-gray-300 rounded"></div> {/* Profession */}
                </div>
            </div>

        </div></div>
    )
}

export default ProfileSkeleton