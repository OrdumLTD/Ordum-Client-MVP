"use client";

import { useEffect } from "react";

import LogIn from "@/Components/Login/";

export default function Home() {
  useEffect(() => {
    console.log("Ordum App");
  }, []);

  return (
    <main className="">
      <LogIn />
    </main>
  );
}
