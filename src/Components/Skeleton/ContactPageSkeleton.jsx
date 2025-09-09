import React from 'react'

const ContactPageSkeleton = () => {
    return (
        <div>
            <div className="w-full h-auto mx-auto sm:mb-12 px-2 py-4 sm:my-8 bg-white animate-pulse space-y-4">
                {/* About Us Card */}
                <div className="w-full h-full mx-auto p-4 border border-gray-300 shadow-3xl bg-white rounded-xl space-y-3">
                    <div className="h-8 w-32 bg-base-200 rounded-md mx-auto"></div>
                    <div className="space-y-2">
                        <div className="h-4 w-full bg-base-200 rounded-md"></div>
                        <div className="h-4 w-5/6 bg-base-200 rounded-md"></div>
                        <div className="h-4 w-2/3 bg-base-200 rounded-md"></div>
                    </div>
                </div>


                {/* Contact Info Card */}
                <div className="w-full h-full mx-auto p-4 border border-gray-300 shadow-3xl bg-white rounded-xl space-y-4">
                    {/* Company Name */}
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 bg-base-200 rounded-full"></div>
                        <div className="h-5 w-28 bg-base-200 rounded-md"></div>
                    </div>


                    {/* Address */}
                    <div className="flex items-start gap-3">
                        <div className="h-6 w-6 bg-base-200 rounded-full"></div>
                        <div className="space-y-2 w-full">
                            <div className="h-4 w-2/3 bg-base-200 rounded-md"></div>
                            <div className="h-4 w-5/6 bg-base-200 rounded-md"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPageSkeleton