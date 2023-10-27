import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex gap-5">
        <Link href="/example-1" className={cn(buttonVariants())}>
          Example 1
        </Link>
        <Link href="/example-2" className={cn(buttonVariants())}>
          Example 2
        </Link>
      </div>
    </div>
  );
}
