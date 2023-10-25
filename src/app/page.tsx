import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/types/product";
import { addProductToDatabase } from "@/actions/serverAction";

export default async function Home() {
  const res = await fetch(
    "https://653918f7e3b530c8d9e7e7b1.mockapi.io/products",
    {
      cache: "no-cache",
      next: {
        tags: ["produts"],
      },
    }
  );

  const products: Product[] = await res.json();

  return (
    <main className="my-6 max-w-4xl mx-auto">
      <h1 className="text-center text-3xl font-bold">Products Warehouse</h1>

      <form
        action={addProductToDatabase}
        className="max-w-lg flex flex-col gap-5 mx-auto p-5"
      >
        <Input name="product" placeholder="Enter product name..." />
        <Input name="price" placeholder="Enter price name..." />
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
