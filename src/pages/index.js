import ProductCard from "@/components/ProductCard";
import SkeletonProductCard from "@/components/SkeletonProductCard";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const [page, setPage] = useState(0);
  const { setTheme } = useTheme();

  const { data, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: async () => {
      const res = await fetch(
        `https://dummyjson.com/products?$limit=30&skip=${page * 30}`
      );
      if (!res.ok) {
        throw new Error("Error");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });

        return res.json();
      }
    },
  });

  return (
    <div className="container  xl:w-3/5 w-full ">
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3   items-center justify-evenly">
          <SkeletonProductCard />
          <SkeletonProductCard />
          <SkeletonProductCard />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col justify-center items-center space-y-5 w-full p-5">
          <div className="flex items-center justify-between w-full  p-0">
            <h1 className="text-4xl md:text-6xl">Products</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="primary" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  {/* <span className="sr-only">Toggle theme</span> */}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 ">
            {data?.products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  thumbnail={product.thumbnail}
                  price={product.price}
                  discountPercentage={product.discountPercentage}
                  rating={product.rating}
                />
              );
            })}
            <div class="col-span-1 md:col-span-2 2xl:col-span-3 flex space-x-5 justify-center">
              <button
                className="border-2 border-black rounded-lg p-4 disabled:cursor-pointer disabled:bg-foreground disabled:text-background"
                onClick={() => {
                  setPage(0);
                }}
                disabled={page === 0}
              >
                1
              </button>
              <button
                className="border-2 border-black rounded-lg p-4 disabled:cursor-pointer disabled:bg-foreground disabled:text-background"
                onClick={() => {
                  setPage(1);
                }}
                disabled={page === 1}
              >
                2
              </button>
              <button
                className="border-2 border-black rounded-lg p-4 disabled:cursor-pointer disabled:bg-foreground disabled:text-background"
                onClick={() => {
                  setPage(2);
                }}
                disabled={page === 2}
              >
                3
              </button>
              <button
                className="border-2 border-black rounded-lg p-4 disabled:cursor-pointer disabled:bg-foreground disabled:text-background"
                onClick={() => {
                  setPage(3);
                }}
                disabled={page === 3}
              >
                4
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
