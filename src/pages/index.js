import ProductCard from '@/components/ProductCard';
import { useQuery } from '@tanstack/react-query'

export default function Home() {
  const data = useQuery({queryKey: ['products'], queryFn: async () => {
    const res = await fetch('https://dummyjson.com/products');
    if(!res.ok)
    {
      throw new Error('Error')    
    }
    return res.json();
  }})
  console.log(data?.data?.products[0]);
  return (
   <div className='flex items-center justify-center h-screen'>
  <ProductCard title={data?.data?.products[0].title} 
  description={data?.data?.products[0].description} 
  thumbnail={data?.data?.products[0].images[0]}
  price={data?.data?.products[0].price}
  discountPercentage={data?.data?.products[0].discountPercentage}
  rating={data?.data?.products[0].rating}
  />
   </div>
  )
}
