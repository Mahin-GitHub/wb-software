

"use client";

import React from "react";

const ProfileSkeleton = () => {
  return (
    <div className="w-full h-auto mx-auto animate-pulse">
      {/* Profile Header */}
      <div className="p-2 border border-gray-200 shadow-md bg-white rounded-sm mb-4">
        <div className="flex justify-start items-center gap-4">
          {/* Profile Image */}
          <div className="w-[130px] h-[130px] bg-gray-300 rounded-md"></div>

          {/* User Info */}
          <div className="space-y-2 flex-1">
            <div className="h-5 w-40 bg-gray-300 rounded"></div>
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
            <div className="h-4 w-36 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Reusable Card Section */}
      <div className="p-2 border border-gray-200 shadow-sm bg-white rounded-sm mb-4">
        <SkeletonCard />
        <Divider />
        <SkeletonCard />
        <Divider />
        <SkeletonCard />
      </div>

      <div className="p-2 border border-gray-200 shadow-sm bg-white rounded-sm mb-4">
        <SkeletonCard />
        <Divider />
        <SkeletonCard />
      </div>

      <div className="p-2 border border-gray-200 shadow-sm bg-white rounded-sm mb-2">
        <SkeletonCard />
        <Divider />
        <SkeletonCard />
        <Divider />
        <SkeletonCard />
        <Divider />
        <SkeletonCard />
      </div>
    </div>
  );
};

// 🔹 Skeleton Card (same layout as ProfileReuseCard)
const SkeletonCard = () => {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="h-5 w-32 bg-gray-300 rounded"></div>
      <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
    </div>
  );
};

// 🔹 Divider
const Divider = () => <div className="border-b border-gray-200 my-2"></div>;

export default ProfileSkeleton;
