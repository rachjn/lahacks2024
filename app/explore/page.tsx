"use client";
import { getClubData } from "../api/clubs";
import { useState, useEffect } from "react"
import Navbar from "../components/navbar";
import axios from 'axios'

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default function Explore() {
  const [image, setImage] = useState("");
  const [clubID, setClubID] = useState(81);

  const makeAPICall = () => {
    client.get(`/api/clubs/${clubID}`)
    .then((res) => {
      return res.data;
    })
    .then(data => {
      console.log(JSON.stringify(data))
      setImage(data.image);
    })
    .catch((error) => {
      console.error("Error parsing JSON:", error);
    });
  }
  
  useEffect(()=>{ 
    makeAPICall();
  }, [])
  
  const handleClick = () => {
    makeAPICall();
    setClubID(clubID + 1);
  }
  
    return (
    <div>
      <Navbar />
      <div className="m-6 mt-0">Explore</div>
      <button
        onClick={() => handleClick()}
        className="rounded-lg relative p-4 px-20 h-16 bg-navy"
      >
        Go to Next Club
      </button>
      
      <img src= {image}></img>
    </div>
  );
}