"use client";
import Link from "next/link";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { signup } from "@/app/actions/auth";
import { FormEvent, useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default function Register() {
  const [currentUser, setCurrentUser] = useState(Boolean);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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

  const submitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("here");

    client.post("/api/register", {
      email: email,
      username: username,
      password: password,
    });
  };

  return (
    <div>
      <div className="overscroll-none animate animate-fade duration-300 delay-100">
        {/* <Navbar /> */}
        <div className="mt-[12rem]">
          <Header />
        </div>
        {/* <div className="m-6 m-24 mt-0 text-center relative">hello</div> */}
        <div className="text-center mb-[2.9rem] mt-[2rem]">
          <form action={signup} onSubmit={submitRegister}>
            <div className="flex flex-col mb-10 mx-14 gap-1">
              {/* <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Name" /> */}

              <label className="text-left" htmlFor="email">
                Email
              </label>
              <input
                className="focus:outline-none focus:ring ring-orange py-3 px-4 bg-white bg-opacity-20 border-2 border-white rounded-lg mb-4"
                id="email"
                name="email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <label className="text-left" htmlFor="name">
                Name
              </label>
              <input
                className="focus:outline-none focus:ring ring-orange py-3 px-4 bg-white bg-opacity-20 border-2 border-white rounded-lg mb-4"
                id="name"
                name="name"
                type="name"
                onChange={(event) => setUsername(event.target.value)}
              />
              <label className="text-left" htmlFor="password">
                Password
              </label>
              <input
                className="focus:outline-none focus:ring ring-orange  py-3 px-4 bg-white bg-opacity-20 border-2 border-white rounded-lg"
                id="password"
                name="password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {/* <button type="submit">Sign Up</button> */}
            {/* <Link
              href="/login"
              className="rounded-md relative p-4 px-20 h-16 bg-gray-500 w-16"
            >
              Login
            </Link> */}
            <button className="font-bold rounded-lg relative px-20 h-16 bg-navy mb-[1rem]">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
