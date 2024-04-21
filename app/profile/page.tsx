"use client";
import Navbar from "../components/navbar";
import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default function Profile() {
  const [context, setContext] = useState("");
  const [data, setData] = useState("");
  const [myName, setMyName] = useState("");
  const [parsedUserData, setParsedUserData] = useState("");
  // const [clubName, setClubName] = useState("");
  // const [clubBio, setClubBio] = useState("");
  // const [clubEmail, setClubEmail] = useState("");
  // const [clubImage, setClubImage] = useState("");
  // const [clubInsta, setClubInsta] = useState("");
  // const [clubSite, setClubSite] = useState("");
  // const clubNames: string[] = [];
  const [parsedData, setParsedData] = useState([]);
  const clubsMap = new Map<string, any>(); //maps club names to
  // const [clubNames, setClubNames] = useState([]);
  // const [clubData, setClubData] = useState({});

  client
    .get("/api/user")
    .then((response) => {
      // Handle successful response
      setContext(JSON.stringify(response.data));
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
        // console.log(parsedData);
        //IMPORTANT: parsedData is an ARRAY of JSON objects.
        //each JSON object is a club, with an id, name, etc.

        // parsedData.forEach((club: any, index: number) => {
        //   const name = club["name"];
        //   clubNames[index] = name;
        //   // setClubNames();
        // });

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

  return (
    <div className="animate animate-fade duration-300 delay-75">
      <Navbar />
      <div className="flex items-center justify-center gap-5 mt-10">
        <div className="rounded-full bg-black relative w-[136px] h-[136px]"></div>
        <div className="w-[160px] h-[120px] text-lg">
          <div className="text-3xl font-bold">{}</div>
        </div>
      </div>
      <div className="m-10 mt-14 font-bold text-3xl">
        {/* <div className=""></div> */}
        {/* {data[0]["name" as any]} */}
        <button onClick={getUserSavedClubs}>Saved Clubs</button>
        {parsedData.map((club: any, index: number) => (
          <div key={index}>{club.name} </div>
        ))}
      </div>

      <p>Context: {context}</p>
    </div>
  );
}
