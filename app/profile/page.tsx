"use client";
import Navbar from "../components/navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default function Profile() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [clubIDs, setClubIDs] = useState([]);
  // const clubIDs: number[] = [];
  const [parsedData, setParsedData] = useState([]);

  client
    .get("/api/user")
    .then((response) => {
      return response.data.user;
    })
    .then((data) => {
      // Handle successful response
      setUserName(data.username);
      setEmail(data.email);
    })
    .catch((error) => {
      // Handle error
      console.error("Error fetching user data:", error);
    });

  // const contextJson = JSON.parse(context);
  // const myName = contextJson.username;

  const getUserSavedClubs = () => {
    client
      .get("api/clubs/myclubs")
      .then((JSONresponse) => {
        setData(JSON.stringify(JSONresponse.data));
        // console.log(JSON.parse(data)[0]); //0 is the index of the club (of the saved)
        // console.log(JSON.parse(data)[0]["name"]); //0 is the index of the club (of the saved)

        // setClubName(JSON.parse(data)[0]["name"]); //0 is the index of the club (of the saved)
        // setClubBio(JSON.parse(data)[0]["description"]); //0 is the index of the club (of the saved)
        // setClubImage(JSON.parse(data)[0]["description"]);
        const newData = JSON.parse(data);
        setParsedData(newData);

        // const newID = parsedData
        // parsedData.forEach((club: any, index: number) => {
        //   const newID = club[index]["club_id"];
        //   setClubIDs([...clubIDs, newID]);
        // });

        // const addClubID = (newID) => {
        //   setClubIDs([...clubIDs, newID]);
        // };

        console.log(clubIDs);
        // console.log(parsedData);
        //IMPORTANT: parsedData is an ARRAY of JSON objects.
        //each JSON object is a club, with an id, name, etc.

        // parsedData.forEach((club: any, index: number) => {
        //   const id = club["club_id"];
        //   clubIDs[index] = id;
        //   // setClubNames();
        // });

        // console.log(clubIDs);
        // cont clubIDs = parsedData.map((club: any, index: number) => (

        // ))

        // clubNames.map((name) => {
        //   console.log(name);
        // });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    getUserSavedClubs();
  }, []);

  // const displayNames = clubNames.map((name) => <div key={name}>{name}</div>);
  const dataMap: Number[] = parsedData.map((club: any) => (club.club_id));
  const x = (dataMap[0]);


  const makeAPICall = () => {
    client
      .get(`/api/clubs/${x}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error parsing JSON:", error);
      });
  };

  useEffect(() => {
    makeAPICall();
  }, []);

  return (
    <div className="animate animate-fade duration-300 delay-75">
      <Navbar />
      <div className="flex items-center justify-center gap-5 mt-10">
        <div className="rounded-full bg-black relative w-[136px] h-[136px]"></div>
        <div className="w-[160px] h-[120px] text-lg">
          <div className="text-3xl font-bold">{userName}</div>
          {email}
        </div>
      </div>
      <div className="m-10 mt-14 font-bold text-3xl">
        {/* <div className=""></div> */}
        {/* {data[0]["name" as any]} */}
        <button onClick={getUserSavedClubs}>Saved Clubs</button>
        <Image
          className="rotate-[225deg] mx-3 inline"
          src="./arrow.svg"
          height={20}
          width={20}
          alt="arrow"
        />
        {parsedData.map((club: any, index: number) => (
          <div key={index}>
            <Link href={`/${club.club_id}`} className="w-full">
              {club.name}
            </Link>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
