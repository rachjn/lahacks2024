"use client";
import { getClubData } from "../api/clubs";
import Navbar from "../components/navbar";

export default function Explore() {
  return (
    <div>
      <Navbar />
      <div className="m-6 mt-0">Explore</div>
      <button
        onClick={getClubData}
        className="rounded-lg relative p-4 px-20 h-16 bg-navy"
      >
        Click to test
      </button>
    </div>
  );
}
