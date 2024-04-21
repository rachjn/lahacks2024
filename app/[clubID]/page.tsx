"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default function Club({ params }: { params: { clubID: number } }) {
  // function findMapByID(idToFind: any) {
  //   // return clubs.find((club: any) => club.club_id === idToFind); //CLUBS IS OUR JSON OBJECT
  // }
  const [clubName, setClubName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [clubImage, setClubImage] = useState("");
  const [site, setSite] = useState("");
  const [insta, setInsta] = useState("");

  const idToFind = params.clubID;
  const makeAPICall = () => {
    client
      .get(`/api/clubs/${idToFind}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(JSON.stringify(data));
        setClubImage(data.image);
        setClubName(data.name);
        setBio(data.description);
        setEmail(data.email);
        setSite(data.website);
        setInsta(data.insta);
      })
      .catch((error) => {
        console.error("Error parsing JSON:", error);
      });
  };
  // const matchingClub = findMapByID(idToFind);
  useEffect(() => {
    makeAPICall();
  }, []);

  return (
    <div className="m-5">
      <div className="flex items-center">
        {/* {idToFind} */}
        <div className="text-3xl font-bold">{clubName}</div>
        <Link href={`${insta}`}>
          <Image
            src="./instagram.svg"
            height={150}
            width={150}
            alt="club photo"
          />
        </Link>
      </div>
      <div className="mb-4">{email}</div>

      <div className="bg-white rounded-lg text-navy p-5 mb-5">
        {bio}
        <div className="my-5">
          <Link href={`${site}`} className="text-lg font-bold underline">
            Check out {clubName}!
          </Link>
        </div>
      </div>
      <img
        className="rounded-lg mb-5"
        src={`${clubImage}`}
        height={400}
        width={400}
        alt="club photo"
      />
      <Link href="/profile">
        <Image
          className="rotate-[-45deg]"
          src="./arrow.svg"
          height={25}
          width={25}
          alt="arrow"
        />
      </Link>
    </div>
  );
}
