import { cache, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// useEffect(() => {
//   const clubID = 1; // replace with dynamic value for club ID
//   client
//     .get(`/api/clubs/${clubID}`)
//     .then((res) => {
//       //   setCurrentUser(true);
//       const jsonData = JSON.parse(res.toString());
//       console.log("Parsed response from API:", jsonData);
//     })
//     .catch((error) => {
//       console.error("Error parsing JSON:", error);
//       //   setCurrentUser(false);
//     });
// }, []);

export const getClubData = async () => {
  //   const clubID = 1; // replace with dynamic value for club ID
  //     const res = await fetch(`http://127.0.0.1:8000/api/${clubID}`)
  //     if (!res.ok) {
  //         throw new Error('Failed to fetch data')
  //     }
  //     return res.json()
  //     }

  // const clubID = 81; // replace with dynamic value for club ID
  // client
  //   .get(`/api/clubs/${clubID}`)
  //   .then((res) => {
  //     //   setCurrentUser(true);
  //     const jsonData = JSON.stringify(res.data);
  //     console.log("Parsed response from API:", jsonData);
  //   })
  //   .catch((error) => {
  //     console.error("Error parsing JSON:", error);
  //     //   setCurrentUser(false);
  //   });
};

// try {
//     const jsonData = JSON.parse(response.toString());
//     console.log("Parsed response from API:", jsonData);
//   } catch (error) {
//     console.error("Error parsing JSON:", error);
//   }
//   console.log("response from API", response);
// };

// const batchGetRingCompetitors = async (
//   club_id: number,
//   name: string,
//   description: string,
//   users: any
// ) => {
// const sheets = google.sheets({ version: "v4" });
// let sheetId = "";
// switch (ring) {
//   case RING1:
//     sheetId = RING1_SPREADSHEET_ID;
//     break;
//   case RING2:
//     sheetId = RING2_SPREADSHEET_ID;
//     break;
//   case RING3:
//     sheetId = RING3_SPREADSHEET_ID;
//     break;
//   default:
//     throw new Error("Invalid Ring ID");
// }
//   const clubRanges = eventIds.map((eventId) => {
//     return eventId + "!A3:T40";
//   });
//   const response = await

// ranges: clubRanges, //sheet names
//   });
//   const eventsWithCompetitorsObjects = response?.data.valueRanges;
//   const clubs = new Map();
//   eventIds.forEach((eventId, index) => {
//     if (eventId === GROUPSET_EVENT_ID) {
//       eventsWithCompetitors.set(
//         eventId,
//         eventsWithCompetitorsObjects[index].values.map(
//           (competitor: string[]) => ({
//             id: competitor[GROUPSET_ID],
//             name: competitor[GROUPSET_TEAM],
//             place: competitor[GROUPSET_PLACE],
//             "final score": competitor[GROUPSET_FINAL_SCORE],
//             time: competitor[GROUPSET_TIME],
//           })
//         )
//       );
//     } else {
//       eventsWithCompetitors.set(
//         eventId,
//         eventsWithCompetitorsObjects[index].values.map(
//           (competitor: string[]) => ({
//             id: competitor[ID],
//             name: competitor[FIRST_NAME] + " " + competitor[LAST_NAME],
//             school: competitor[SCHOOL],
//             team: competitor[TEAM],
//             place: competitor[PLACE],
//             "final score": competitor[FINAL_SCORE],
//             time: competitor[TIME],
//             scores: [
//               competitor[SCORE1],
//               competitor[SCORE2],
//               competitor[SCORE3],
//               competitor[SCORE4],
//               competitor[SCORE5],
//             ],
//           })
//         )
//       );
//     }
//   });
//   return eventsWithCompetitors;
// };
