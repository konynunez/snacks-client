"use client";
import Image from "next/image";
import snackAPI from "@/utils/axiosinstance";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    snackAPI
      .get("/snacks")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching snacks:", error);
      });
  }, []);

  return (
    <div>
      <h1>Snacks List</h1>
      {/* UI for displaying snacks */}
    </div>
  );
}
