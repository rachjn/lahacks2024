"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Header from "./header";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false); //set state to false at first
  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile" },
    { name: "Explore", href: "/explore" },
    { name: "Logout", href: "/logout" },
  ];
  return (
    <>
      {/* <div className="m-4 h-14 w-14 bg-blue-500 items-center"> */}
      <div>
        <button
          onClick={handleClick}
          className={`h-16 bg-gray-500 w-16 m-6
        ${isOpen ? "hidden" : "visible"}`}
        ></button>
      </div>
      <div
        className={`${isOpen ? "bg-blue-100 h-screen basis-full" : "hidden"}`}
      >
        <div className="absolute left-0 m-6">
          <button
            onClick={handleClick}
            className="h-16 bg-gray-500 w-16"
          ></button>
        </div>
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-y-40 text-3xl">
            {/* <span>profile</span>
            <span>explore</span>
            <span>logout</span> */}
            {navLinks.map((link) => {
              return (
                <>
                  <Link
                    onClick={handleClick}
                    href={link.href}
                    key={link.name}
                    className=""
                  >
                    {link.name}
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {isOpen === false && <Header />}
    </>
  );
}
