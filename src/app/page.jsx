"use client";
import { useState, useEffect } from "react";
import SnackCard from "@/components/SnackCard";
import { useSnacks } from "@/contexts/snackContext";

export default function Home() {
  const { snacks } = useSnacks();

  return (
    <div className="flex flex-col items-center p-6">
      {/* Centered Title */}
      <h1 className="text-3xl font-bold text-pale-red-500 mb-8">
        Most Popular Products
      </h1>

      {/* Snack Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {snacks &&
          snacks.map((data, index) => (
            <SnackCard key={index} snack={data} />
          ))}
      </div>
    </div>
  );
}
