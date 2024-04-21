"use client";

import Navbar from "../components/navbar";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export default function Logout() {
  const [currentUser, setCurrentUser] = useState(Boolean);

  const submitLogout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    client.post(
      "/api/logout",
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
    });
  }

  return (
    <div>
      <Navbar />
      <div className="m-6 mt-0">Logout</div>
      <form onSubmit={e => submitLogout(e)}>
        <Link href="/login" type="submit">Log out</Link>
      </form>
    </div>
  );
}
