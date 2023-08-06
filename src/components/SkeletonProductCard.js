import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";
import { Rating } from "@smastrom/react-rating";

export default function SkeletonProductCard({
  title,
  description,
  price,
  discountPercentage,
  thumbnail,
  rating,
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen rounded-lg ">
      <Card className="w-[300px] ">
        <Skeleton className="w-[300px] h-[300px]" />
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
