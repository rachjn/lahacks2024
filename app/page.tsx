import Menu from "@/app/components/menu";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="overscroll-none animate animate-fade duration-300 delay-100">
      {/* <Navbar /> */}
      <div className="mt-[12rem]">
        <Header />
      </div>
      <div className="m-24 mt-0 text-xl text-center relative">
        Your solution to finding school clubs!
      </div>
      <div className="text-center mb-[16.5rem] mt-[12rem]">
        <Link
          href="/register"
          className="rounded-lg relative p-4 px-20 h-16 bg-navy w-16"
        >
          Discover Clubs
        </Link>
      </div>
    </div>
  );
}
