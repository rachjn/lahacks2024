"use client";
import Navbar from "../components/navbar";
import axios from "axios";
import { useState } from "react";

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default function Profile() {
  const [context, setContext] = useState("");

  client
    .get("/api/user")
    .then((response) => {
      // Handle successful response
      setContext(JSON.stringify(response.data));
    })
    .catch((error) => {
      // Handle error
      console.error("Error fetching user data:", error);
    });

  // const contextJson = JSON.parse(context);
  // const myName = contextJson.username;

  return (
    <div className="animate animate-fade duration-300 delay-75">
      <Navbar />
      <div className="flex items-center justify-center gap-5 mt-10">
        <div className="rounded-full bg-black relative w-[136px] h-[136px]"></div>
        <div className="w-[160px] h-[120px] text-lg">
          <div className="text-3xl font-bold">Jane Doe</div>
          Interests
        </div>
      </div>
      <div className="m-10 mt-14 font-bold text-3xl">
        {/* <div className=""></div> */}
        Saved Clubs
      </div>
      <p>Context: {context}</p>
    </div>
  );
}
