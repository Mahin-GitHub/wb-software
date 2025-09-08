import Skeleton from "./Skeleton";

export const NewsCardSkeleton = () => {
    return (
        <div className="flex gap-3 border-b py-3">
            <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />   
                <Skeleton className="h-4 w-2/4" />   
                <Skeleton className="h-4 w-full" />  
            </div>
            <Skeleton className="h-24 w-32 rounded-md" /> 
        </div>
    );
};
