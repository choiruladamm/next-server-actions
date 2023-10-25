import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export interface Product {
  id?: number;
  product: string;
  price: string;
}

export default async function Home() {
  const res = await fetch(
    "https://653918f7e3b530c8d9e7e7b1.mockapi.io/products",
    {
      cache: "no-cache",
    }
  );

  const products: Product[] = await res.json();

  return (
    <main className="my-6 max-w-4xl mx-auto">
      <h1 className="text-center text-3xl font-bold">Products Warehouse</h1>

      <form action="" className="max-w-lg flex flex-col gap-5 mx-auto p-5">
        <Input type="text" placeholder="Enter product name..." />
        <Input type="text" placeholder="Enter price name..." />
        <Button>Add Product</Button>
      </form>

      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p className="font-semibold">{product.product}</p>
            <p className="text-gray-600">$ {product.price}</p>
          </div>
        ))}
      </div>
      
    </main>
  );
}
