import Skeleton from "./Skeleton";
import { NewsCardSkeleton } from "./NewsCardSkeleton";
import { SliderSkeleton } from "./SliderSkeleton";

const ArticleSkeleton = () => {
  return (
    <div className="w-full h-auto mt-8 mx-auto bg-white overflow-hidden space-y-6">

      {/* Top News */}
      <div className="w-full shadow-3xl bg-gray-300 p-2">
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-6 w-24" /> {/* Title */}
          <div className="flex gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
        <SliderSkeleton count={3} />
      </div>

      {/* Top Story */}
      <div>
        <div className="flex justify-between mb-3">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-56 w-full rounded-lg" />
        <Skeleton className="h-4 w-2/3 mt-2" />
      </div>

      {/* Top Story Sliding */}
      <SliderSkeleton />

      {/* Latest News */}
      <div>
        <div className="flex justify-between mb-3">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-16" />
        </div>
        {[...Array(5)].map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>

      {/* রাষ্ট্রীয় খবর */}
      <div>
        <div className="flex justify-between mb-3">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-16" />
        </div>
        <SliderSkeleton />
      </div>

      {/* Photo Gallery */}
      <div>
        <div className="flex justify-between mb-3">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-16" />
        </div>
        <SliderSkeleton />
      </div>

      {/* Web Story */}
      <div>
        <div className="flex justify-between mb-3">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-16" />
        </div>
        <SliderSkeleton />
      </div>

      {/* TV Show */}
      <div>
        <div className="flex justify-between mb-3">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-16" />
        </div>
        <SliderSkeleton />
      </div>

      {/* Premium */}
      <div>
        <div className="flex justify-between mb-3">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-16" />
        </div>
        {[...Array(5)].map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>

    </div>
  );
};

export default ArticleSkeleton;
