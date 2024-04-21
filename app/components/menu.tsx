"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Header from "./header";
import Image from "next/image";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false); //set state to false at first
  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  const navLinks = [
    { name: "EXPLORE", href: "/explore" },
    { name: "PROFILE", href: "/profile" },
    { name: "LOGOUT", href: "/logout" },
  ];
  return (
    <>
      {/* <div className="m-4 h-14 w-14 bg-blue-500 items-center"> */}
      <div>
        {/* <button
          onClick={handleClick}
          className={`h-16 bg-gray-500 w-11 m-7
        ${isOpen ? "hidden" : "visible"}`}
        ></button> */}
        <Image
          onClick={handleClick}
          className={`mx-6 cursor-pointer
          ${isOpen ? "hidden" : "visible"}`}
          src="./burger.svg"
          width={30}
          height={30}
          alt="menu"
        />
      </div>
      <div className={`${isOpen ? "bg-teal h-screen basis-full" : "hidden"}`}>
        <div className="absolute left-0">
          {/* <button
            onClick={handleClick}
            className="h-16 bg-gray-500 w-10"
          ></button> */}
          <Image
            onClick={handleClick}
            className="cursor-pointer mx-6 mt-[2.2rem]"
            src="./burger.svg"
            width={30}
            height={30}
            alt="menu"
          />
        </div>
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-y-24 text-3xl">
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
                    className="font-bold animate animate-fade cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-3">{isOpen === false && <Header />}</div>
      <a href="/profile">
        <Image
          src="./user.svg"
          width={35}
          height={30}
          alt="menu"
          className={`m-7 ml-4 mt-8
          ${isOpen ? "hidden" : "visible"}`}
        />
      </a>
    </>
  );
}
