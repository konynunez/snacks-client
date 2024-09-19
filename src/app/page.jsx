"use client";
import image from "next/image";
import snackAPI from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import SnackCard from "@/components/SnackCard";
import { useSnacks } from "@/contexts/snackContext";

export default function Home() {
  const { snacks } = useSnacks();
  return (
    <div>
      {snacks &&
        snacks.map((data, index) => {
          //console.log(data);
          return <SnackCard key={index} snack={data} />;
        })}
    </div>
  );
}
