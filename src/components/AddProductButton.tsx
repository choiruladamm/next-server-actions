"use client";

import React, { FC, useTransition } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { addProductToDatabase } from "@/actions/serverAction";

interface AddProductButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AddProductButton: FC<AddProductButtonProps> = ({
  className,
  children,
}) => {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("product", "Macbook Pro");
  formData.append("price", "100");

  return (
    <Button
      className={cn("fixed bottom-10 right-10", className)}
      onClick={() => startTransition(() => addProductToDatabase(formData))}
    >
      {isPending ? "Adding..." : children}
    </Button>
  );
};

export default AddProductButton;
