import React from 'react'

const NewsDetailsSkeleton = () => {
  return (
    <div>
      <div className="sm:mt-8  w-full animate-pulse">
        <div className="w-full space-y-6">
          {/* Main image skeleton */}
          <div className="w-full rounded-lg overflow-hidden bg-gray-400 h-[180px]"></div>


          {/* Title + meta skeleton */}
          <div className="space-y-2">
            <div className="h-8 w-3/4 rounded-md bg-gray-400"></div>
            <div className="h-4 w-1/4 rounded-md bg-gray-400"></div>
          </div>


          {/* Post body skeleton */}
          <div className="space-y-3 text-gray-800 text-xs text-[20px] leading-[32px] font-serif">
            <div className="h-6 w-full rounded-md bg-gray-400"></div>
            <div className="h-6 w-full rounded-md bg-gray-400"></div>
            <div className="h-6 w-5/6 rounded-md bg-gray-400"></div>
            <div className="h-6 w-4/6 rounded-md bg-gray-400"></div>
            <div className="h-6 w-3/4 rounded-md bg-gray-400"></div>
          </div>


          {/* Related news heading */}
          <h2 className="text-xl font-bold my-6">Related News</h2>


          {/* Related news list skeletons */}
          <div className="w-full space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="my-6 grid grid-cols-1 sm:grid-cols-4 gap-4 items-start">
                {/* Thumbnail */}
                <div className="col-span-1 rounded-lg overflow-hidden bg-gray-400 h-36 sm:h-28"></div>


                {/* Text content */}
                <div className="col-span-1 sm:col-span-3 space-y-3">
                  <div className="h-6 w-3/4 rounded-md bg-gray-400"></div>
                  <div className="h-4 w-1/3 rounded-md bg-gray-400"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded-md bg-gray-400"></div>
                    <div className="h-4 w-5/6 rounded-md bg-gray-400"></div>
                    <div className="h-4 w-2/3 rounded-md bg-gray-400"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* small footer placeholder */}
          <div className="mt-4 h-6 w-1/6 rounded-md bg-gray-400"></div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetailsSkeleton