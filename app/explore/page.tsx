"use client";
import { getClubData } from "../api/clubs";
import { useState } from "react"
import Navbar from "../components/navbar";
import axios from 'axios'

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default function Explore() {
  const [image, setImage] = useState("")
  const clubID = 81; // replace with dynamic value for club ID
  client.get(`/api/clubs/${clubID}`)
    .then((res) => {
      //   setCurrentUser(true);
      return res.data.image;
    })
    .then(img => {
      setImage(img);
    })
    .catch((error) => {
      console.error("Error parsing JSON:", error);
      //   setCurrentUser(false);
    });

    console.log(image)
  return (
    <div>
      <Navbar />
      <div className="m-6 mt-0">Explore</div>
      <button
        //onClick={getClubData}
        className="rounded-lg relative p-4 px-20 h-16 bg-navy"
      >
        Click to test
      </button>
      
      <img src= {image}></img>
    </div>
  );
}
