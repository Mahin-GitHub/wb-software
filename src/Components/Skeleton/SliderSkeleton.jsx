import Skeleton from "./Skeleton";

export const SliderSkeleton = ({ count = 4 }) => {
    return (
        <div className="flex gap-4 overflow-x-auto">
            {[...Array(count)].map((_, i) => (
                <Skeleton key={i} className="h-40 w-64 rounded-lg flex-shrink-0" />
            ))}
        </div>
    );
};
