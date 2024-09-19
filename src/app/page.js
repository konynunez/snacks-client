"use client";
import snackAPI from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import SnackCard from "@/components/SnackCard";

export default function Home() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    snackAPI
      .get("/snacks")
      .then((response) => {
        console.log(response.data);
        setSnacks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching snacks:", error);
      });

    return () => {
      console.log("Cleanup");
    };
  }, []);

  return (
    <div>
      {snacks.map((data, index) => (
        <SnackCard key={data.id} snack={data} />
      ))}
    </div>
  );
}
