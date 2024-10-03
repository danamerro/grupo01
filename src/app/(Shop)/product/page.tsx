"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export interface Props {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

export default function ProductList() {
    const [products, setProducts] = useState<Props[]>([])
    useEffect(()=>{
        (async ()=>{
            try {
                const products= await fetch('https://fakestoreapi.com/products?limit=5')
                if (!products.ok) {
                    throw new Error('Network response was not ok');
                }
                const data : Props[] = await products.json();
                setProducts(data)
            } catch (error) {
                console.error("Error al obtener los productos:", error)
            }
        })
        ();
    },[])
    
 const router = useRouter() 
return(
<div className="flex items-center justify-center gap-4 p-4 w-full">
    {products.map((product)=>( 
        <div key={product.id} onClick={()=>router.push(`/product/${product.id}`)} className="flex flex-col cursor-pointer">
            <img src={product.image} alt={product.title} width={150} height={150} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    ))}
</div>)
}