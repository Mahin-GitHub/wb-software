import React from 'react'

const DashboardPageSkeleton = () => {
    return (
      <div className="w-full h-auto mx-auto p-2  space-y-4 animate-pulse">
  {/* Wallet + Transfer Section */}
  <div className="w-full flex justify-around items-center bg-white border border-gray-300 shadow-sm px-2">
    {/* Wallet */}
    <div className="w-1/2 space-y-2">
      <div className="h-6 bg-gray-300 rounded w-32 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded w-40 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
      <div className="h-8 bg-gray-300 rounded w-full"></div>
    </div>

    {/* Divider */}
    <div className="w-px bg-gray-300 h-48 mx-2"></div>

    {/* Transfer To */}
    <div className="w-1/2 space-y-2">
      <div className="h-6 bg-gray-300 rounded w-32 mx-auto"></div>
      <div className="h-8 bg-gray-300 rounded w-full"></div>
      <div className="h-8 bg-gray-300 rounded w-full"></div>
      <div className="h-8 bg-gray-300 rounded w-full"></div>
    </div>
  </div>

  {/* Dashboard Cards Skeleton */}
  {[...Array(2)].map((_, i) => (
    <div
      key={i}
      className="w-full max-w-2xl mx-auto bg-white border border-gray-300 shadow-sm rounded-lg p-4 flex justify-around items-center"
    >
      {[...Array(3)].map((_, j) => (
        <div key={j} className="flex flex-col items-center space-y-2">
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </div>
      ))}
    </div>
  ))}

  {/* Expense Skeleton */}
  <h2 className="h-6 bg-gray-300 rounded w-32 mx-auto"></h2>
  <div className="w-full flex justify-around items-center bg-white border border-gray-300 shadow-sm p-4">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="flex flex-col items-center space-y-2">
        <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        <div className="h-4 bg-gray-300 rounded w-16"></div>
      </div>
    ))}
  </div>

  {/* Beneficiary Skeleton */}
  <h2 className="h-6 bg-gray-300 rounded w-48 mx-auto"></h2>
  <div className="w-full flex justify-around items-center bg-white border border-gray-300 shadow-sm p-4">
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex flex-col items-center space-y-2">
        <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        <div className="h-4 bg-gray-300 rounded w-32"></div>
      </div>
    ))}
  </div>

  {/* Calculator Skeleton */}
  <h2 className="h-6 bg-gray-300 rounded w-40 mx-auto"></h2>
  <div className="w-full flex justify-around items-center bg-white border border-gray-300 shadow-sm p-4">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="flex flex-col items-center space-y-2">
        <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        <div className="h-4 bg-gray-300 rounded w-16"></div>
      </div>
    ))}
  </div>

  {/* Others Skeleton */}
  <h2 className="h-6 bg-gray-300 rounded w-32 mx-auto"></h2>
  <div className="w-full flex justify-around items-center bg-white border border-gray-300 shadow-sm p-4">
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex flex-col items-center space-y-2">
        <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        <div className="h-4 bg-gray-300 rounded w-24"></div>
      </div>
    ))}
  </div>
</div>


    )
}

export default DashboardPageSkeleton