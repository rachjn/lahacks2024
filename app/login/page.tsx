"use client";
import Link from "next/link";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { signup } from "@/app/actions/auth";
import { FormEvent, useState, useEffect } from "react";

// const client = axios.create({
//     baseURL: "http://127.0.0.1:8000"
//   });

export default function Login() {
  const [currentUser, setCurrentUser] = useState("");
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    submitLogin(event);
  }, []);

  //   const createFormData = () => {
  //     const formData = new FormData();
  //     formData.set("username", "rachel");
  //     formData.set("email", "rachel@gmail.com");
  //     formData.set("password", "1234244189");
  //     return formData;
  //   };

  const submitLogin = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    formData.set("username", username);
    formData.set("email", username);
    formData.set("password", username);
    formData.set("currentUser", username);
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: formData,
    });
    // Try parsing the response as JSON
    try {
      const jsonData = JSON.parse(response.toString());
      console.log("Parsed response from API:", jsonData);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
    console.log("response from API", response);
  };

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
            {/* <button type="submit">Sign Up</button> */}
            <Link
              href="/login"
              className="rounded-md relative p-4 px-20 h-16 bg-gray-500 w-16"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
