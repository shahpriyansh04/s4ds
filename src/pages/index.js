import ProductCard from "@/components/ProductCard";
import SkeletonProductCard from "@/components/SkeletonProductCard";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";

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
          <Header />
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
            <Pagination setPage={setPage} page={page} />
          </div>
        </div>
      )}
    </div>
  );
}
