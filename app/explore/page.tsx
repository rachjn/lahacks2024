"use client";
import { getClubData } from "../api/clubs";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import { useRouter } from "next/navigation";

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
import Image from "next/image";

export default function Explore() {
  const [currentUser, setCurrentUser] = useState(Boolean);
  const [image, setImage] = useState("");
  const [clubID, setClubID] = useState(1);
  const [clubName, setClubName] = useState("");
  const [clubBio, setClubBio] = useState("");
  const [openBio, setOpenBio] = useState(false);

  // useEffect(() => {
  //   client.get("/api/user")
  //   .then((res) => {
  //     setCurrentUser(true);
  //   })
  //   .catch((error) => {
  //     setCurrentUser(false);
  //   });
  // }, []);

  const makeAPICall = () => {
    client
      .get(`/api/clubs/${clubID}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(JSON.stringify(data));
        setImage(data.image);
        setClubName(data.name);
        setClubBio(data.description);
      })
      .catch((error) => {
        console.error("Error parsing JSON:", error);
      });
  };

  useEffect(() => {
    makeAPICall();
  }, []);

  useEffect(() => {
    addClubToUser();
  }, []);

  const handleClick = () => {
    setClubID(clubID + 1);
    makeAPICall();
  };

  const arrowClick = () => {
    if (!openBio) setOpenBio(true);
    else setOpenBio(false);
  };

  const addClubToUser = () => {
    client.put(`/api/clubs/myclubs/add/${clubID - 1}`).catch((error) => {
      console.error("Error parsing JSON:", error);
    });
  };

  const addUser = () => {
    addClubToUser();
    handleClick();
  };

  // if (currentUser) {
  return (
    <div className="animate animate-fade duration-300 delay-75">
      {/* <Navbar />
        <div className="m-6 mt-0">Explore</div>
        <button
          onClick={() => handleClick()}
          className="rounded-lg relative p-4 px-20 h-16 bg-navy"
        >
          Click to test
        </button> */}
      <Navbar />
      <div className="flex flex-col mt-16 items-center h-[28rem] mb-7 drop-shadow-md">
        <div className="h-[28rem] w-4/5 bg-teal rounded-xl overflow-hidden drop-shadow-md">
          <div
            className={`absolute mx-5 h-[10rem] mt-[19.5rem] font-bold text-2xl " 
            ${openBio ? "w-11/12 pr-3" : "visible"}`}
          >
            <div
              className={`line-clamp-1
            ${openBio ? "-mt-[18.5rem] mb-2 line-clamp-none" : "visible"}`}
            >
              {clubName}
            </div>
            <div className="h-20 relative">
              <div
                className={`mr-6 font-normal text-sm line-clamp-4
            ${
              openBio
                ? "absolute top-0 h-[23rem] line-clamp-none overflow-scroll"
                : "visible"
            }`}
              >
                {clubBio}
              </div>
              <Image
                className="cursor-pointer fixed bottom-5 right-5 animate animate-pulse"
                onClick={arrowClick}
                src="./arrow.svg"
                height={20}
                width={20}
                alt="arrow"
              />
              {/* <button className="absolute bottom-0 right-0 h-6 bg-white w-6 rounded-full "></button> */}
            </div>
          </div>
          <img
            className={`drop-shadow-sm object-cover p-3 md:h-[20rem] lg:p-5 rounded-[2rem]
            ${openBio ? "hidden" : "visible"}`}
            src={image}
            height={500}
            width={500}
            alt="club image"
          />
          <div
            className={`w-full -z-10 absolute bottom-0 bg-gradient-to-t from-30% from-navy to-transparent h-[10rem]
            ${openBio ? "bg-navy h-full" : "visible"}`}
          ></div>
        </div>
      </div>
      <div className="flex justify-between mx-10 drop-shadow-lg mb-8">
        <div className="cursor-pointer rounded-full h-[7rem] w-[7rem] bg-white flex justify-center">
          <Image
            src="./dislike.svg"
            width={80}
            height={80}
            alt="dislike"
            onClick={() => handleClick()}
          />
        </div>
        <div className="cursor-pointer rounded-full h-[7rem] w-[7rem] bg-white flex justify-center">
          <Image
            src="./like.svg"
            width={80}
            height={80}
            alt="like"
            onClick={() => addUser()}
          />
        </div>
      </div>
    </div>
  );
  // } else {

  // }
}
