import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidateTag } from "next/cache";
import React from "react";

export interface Product {
  id?: number;
  product: string;
  price: string;
}

export default async function Home() {
  const urlMockAPi = "https://653918f7e3b530c8d9e7e7b1.mockapi.io/products";

  const res = await fetch(urlMockAPi, {
    cache: "no-cache",
    next: {
      tags: ["produts"],
    },
  });

  const products: Product[] = await res.json();

  const addProductToDatabase = async (e: FormData) => {
    "use server";

    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();

    if (!product || !price) return;

    const newProduct: Product = {
      product,
      price,
    };

    await fetch(urlMockAPi, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidateTag("products");
  };

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
