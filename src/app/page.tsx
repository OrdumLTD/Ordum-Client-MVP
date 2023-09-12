"use client";

// import LogIn from "@/Components/Login/";
import dynamic from "next/dynamic";

const LogIn = dynamic(() => import('@/Components/Login'), {ssr: false})

export default function Home() {
  return (
    <main className="">
      <LogIn />
    </main>
  );
}
