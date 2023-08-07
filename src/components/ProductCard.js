import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rating } from "@smastrom/react-rating";

export default function ProductCard({
  title,
  description,
  price,
  discountPercentage,
  thumbnail,
  rating,
}) {
  return (
    <div className="flex flex-col  items-center justify-center border2 rounded-lg p-0 m-5">
      <Card className="w-[300px] h-[400px] border-0 shadow-lg">
        <div className="w-[300px]  h-[200px]">
          <img
            src={thumbnail}
            alt={"e"}
            objectFit="contain"
            className="rounded-t-lg w-full h-full hover:cursor-pointer"
          />
        </div>

        <CardHeader className="hover:cursor-pointer">
          <CardTitle className="text-2xl truncate text-font-sans">
            {title}
          </CardTitle>
          <CardDescription className="truncate text font-sans ">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="justify-center items-center text-lg">
          <div className="flex space-x-2">
            <p className="font-bold text-2xl truncate">
              ${price - (discountPercentage / 100) * price}
            </p>
            <p className="text-gray-400 line-through text-2xl">${price}</p>
          </div>
          <p className="">({discountPercentage}% off)</p>
        </CardContent>
      </Card>
    </div>
  );
}
