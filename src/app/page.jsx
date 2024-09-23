"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import snackAPI from "../utils/axiosinstance";
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
