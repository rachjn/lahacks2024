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

  client.get('/api/user',)
  .then(response => {
    // Handle successful response
    setContext(JSON.stringify(response.data));
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching user data:', error);
  });

  return (
    <div>
      <Navbar />
      <div className="m-6 mt-0">Profile</div>
      <p>Context: {context}</p>
      
    </div>
  );
}
