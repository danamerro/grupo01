"use client"

import { useState, useEffect } from "react";

interface Props {
    title: string;
    image: string;
    
}


export default function Page({params}: {params:{id:string}}){
    const {id} = params;

    const [product, setProducts] = useState<Props | null>(null)
    useEffect(()=>{
        (async ()=>{
            try {
                const products= await fetch(`https://fakestoreapi.com/products/${id}`)
                if (!products.ok)
                    {
                    throw new Error('Network response was not ok');
                    }
                    const data : Props = await products.json();
                    setProducts(data)
                } catch (error) {
                    console.error("Error al obtener los productos:", error)
                }
            })
            ();
        },[id])
    
        return (
            <div className="flex items-center flex-wrap text-xl">
                {product ? (
                    <div>
                        <h1>{product.title}</h1>
                        <img src={product.image} alt={product.title} />
                        
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        );
    }