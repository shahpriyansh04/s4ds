import ProductCard from "@/components/ProductCard";
import SkeletonProductCard from "@/components/SkeletonProductCard";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
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
  console.log(data?.total);

  return (
    <div className="container  mx-auto w-3/5">
      {isLoading && (
        <div className="flex  items-center justify-evenly">
          <SkeletonProductCard />
          <SkeletonProductCard />
          <SkeletonProductCard />
        </div>
      )}
      {!isLoading && (
        <div className="grid grid-cols-3 gap-4 items-center justify-center">
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
          <div class="col-span-3 flex space-x-5 justify-center">
            <button
              className="border-2 border-black rounded-lg p-4 disabled:cursor-pointer disabled:bg-gray-300"
              onClick={() => {
                setPage(0);
              }}
              disabled={page === 0}
            >
              1
            </button>
            <button
              className="border-2 border-black rounded-lg p-4 disabled:cursor-pointer disabled:bg-gray-300"
              onClick={() => {
                setPage(1);
              }}
              disabled={page === 1}
            >
              2
            </button>
            <button
              className="border-2 border-black rounded-lg p-4 disabled:cursor-pointer disabled:bg-gray-300"
              onClick={() => {
                setPage(2);
              }}
              disabled={page === 2}
            >
              3
            </button>
            <button
              className="border-2 border-black rounded-lg p-4 disabled:cursor-pointer disabled:bg-gray-300"
              onClick={() => {
                setPage(3);
              }}
              disabled={page === 3}
            >
              4
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
