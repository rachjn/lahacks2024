"use client";
import Link from "next/link";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { signup } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
};

export default function Login() {
  const [currentUser, setCurrentUser] = useState(Boolean);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   client.get("/api/user")
  //   .then((res) => {
  //     setCurrentUser(true);
  //   })
  //   .catch((error) => {
  //     setCurrentUser(false);
  //   });
  // }, []);

  const submitLogout = () => {
    client
      .post(
        "/api/logout",
        {
          withCredentials: true,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      )
      .then(function (res) {
        setCurrentUser(false);
      });
  };

  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="text-xl flex justify-center">
        Are you sure you want to log out?
      </div>
      
      <div className="text-center mb-[3.4rem] mt-[3rem]">
        <button
          onClick={() => {router.push("/"); submitLogout();}}
          className="font-bold rounded-lg relative px-20 h-16 bg-navy mb-[1rem]"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
