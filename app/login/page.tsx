"use client";
import Link from "next/link";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { signup } from "@/app/actions/auth";
import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000", 
});

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
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


  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    client.post(
      "/api/login",
      {
        withCredentials: true,
        email: email,
        password: password
      },
      {headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      }}
    ).then(function(res) {
      setCurrentUser(true);
    });
  }

  return (
    
    <div>
      <div className="overscroll-none">
        {/* <Navbar /> */}
        <div className="mt-[12rem]">
          <Header />
        </div>
        {/* <div className="m-6 m-24 mt-0 text-center relative">hello</div> */}
        <div className="text-center mb-[16.5rem] mt-[12rem]">
          <form action={signup} onSubmit={submitLogin}>
            <div className="flex flex-col mb-10 mx-10 gap-1">
              {/* <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Name" /> */}
              <label className="text-left" htmlFor="email">
                Email
              </label>
              <input
                className="py-5 px-4 bg-gray-200 rounded mb-4"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <label className="text-left" htmlFor="password">
                Password
              </label>
              <input
                className="py-5 px-4 bg-gray-200 rounded"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button className="rounded-md relative p-4 px-20 h-16 bg-gray-500 w-16">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
