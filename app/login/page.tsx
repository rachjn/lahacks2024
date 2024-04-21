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

  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    client
      .post(
        "/api/login",
        {
          withCredentials: true,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      )
      .then(function (res) {
        setCurrentUser(true);
      });
  };
  return (
    <div>
      <div className="overscroll-none">
        {/* <Navbar /> */}
        <div className="mt-[12rem]">
          <Header />
        </div>
        {/* <div className="m-6 m-24 mt-0 text-center relative">hello</div> */}
        <div className="text-center mb-[6rem] mt-[4rem]">
          <form action={signup} onSubmit={submitLogin}>
            <div className="flex flex-col mb-10 mx-14 gap-1">
              {/* <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Name" /> */}
              <div className=" text-xl text-center relative">Welcome back!</div>
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
              <label className="text-left" htmlFor="password">
                Password
              </label>
              <input
                className="focus:outline-none focus:ring ring-orange py-3 px-4 bg-white bg-opacity-20 border-2 border-white rounded-lg mb-4"
                id="password"
                name="password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              onClick={() => {
                window.location.href = "/explore";
              }}
              className="font-bold rounded-lg relative px-20 h-16 bg-navy mb-[1rem]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
