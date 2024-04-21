"use client";
import { getClubData } from "../api/clubs";
import { useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
import Image from "next/image";

export default function Explore() {
  const [image, setImage] = useState("");
  const clubID = 81; // replace with dynamic value for club ID
  client
    .get(`/api/clubs/${clubID}`)
    .then((res) => {
      //   setCurrentUser(true);
      return res.data.image;
    })
    .then((img) => {
      setImage(img);
    })
    .catch((error) => {
      console.error("Error parsing JSON:", error);
      //   setCurrentUser(false);
    });

  console.log(image);
  return (
    <div className="animate animate-fade duration-300 delay-75">
      {/* <Navbar />
      <div className="m-6 mt-0">Explore</div>
      <button
        //onClick={getClubData}
        className="rounded-lg relative p-4 px-20 h-16 bg-navy"
      >
        Click to test
      </button> */}
      <Navbar />
      <div className="flex flex-col justify-around -mt-[4rem] items-center h-[80vh] drop-shadow-md">
        <div className="h-2/3 w-4/5 bg-black rounded-xl overflow-hidden drop-shadow-md">
          <div className="absolute mx-5 h-[10rem] mt-[20rem] font-bold text-3xl ">
            Club Name
            <div className="mt-2 font-normal text-base">Biography</div>
          </div>
          <div className="bg-gradient-to-t from-30% from-navy to-transparent h-[10rem] mt-[20rem]"></div>
        </div>
      </div>
      <div className="flex justify-between mx-10 -mt-20 mb-[2.5rem] drop-shadow-lg">
        <div className="rounded-full h-[7rem] w-[7rem] bg-white flex justify-center">
          <Image src="./dislike.svg" width={80} height={80} alt="dislike" />
        </div>
        <div className="rounded-full h-[7rem] w-[7rem] bg-white flex justify-center">
          <Image src="./like.svg" width={80} height={80} alt="like" />
        </div>
      </div>
    </div>
  );
}
