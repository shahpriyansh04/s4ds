import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/card"
  
export default function ProductCard({title,description,price,discountPercentage,thumbnail,rating}) {
  
    return (
     <div className='flex items-center justify-center h-screen rounded-lg'>
            <Image src={thumbnail} alt={"e"}  width={300} height={300} className='rounded-t-lg'/>
            <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

     </div>
    )
  }
  