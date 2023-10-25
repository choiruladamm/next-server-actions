import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Home() {
  return (
    <main className="mt-6">
      <h1 className="text-center text-3xl font-bold">Products Warehouse</h1>

      <form action="" className="max-w-lg flex flex-col gap-5 mx-auto p-5">
        <Input type="text" placeholder="Enter product name..." />
        <Input type="text" placeholder="Enter price name..." />
        <Button>Add Product</Button>
      </form>

    </main>
  );
}
