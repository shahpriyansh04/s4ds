import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonProductCard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen rounded-lg ">
      <Card className="w-[300px]  bg-white dark:bg-black">
        <Skeleton className="w-[300px] h-[300px] rounded-b-none" />
        <CardHeader>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </CardHeader>
        <CardContent className="flex flex-col space-y-2 justify-center items-cener text-lg">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </CardContent>
      </Card>
    </div>
  );
}
