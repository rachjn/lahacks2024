// import { NextResponse } from "next/server";

// // export async function GET() {
// //   const data = {
// //     email: "rachel@hotmail.com",
// //     password: "1234",
// //   };

// //   return NextResponse.json({ data });
// // }

// export default async function handler(req: any, res: any) {
//   if (req.method === "POST") {
//     // Parse the incoming JSON data
//     const data = req.body;

//     // Do something with the data (e.g., save it to a database)
//     console.log("Received data:", data);

//     // Send a response
//     res.status(200).json({ message: "Data received successfully" });
//   } else {
//     // Handle other HTTP methods
//     res.status(405).end(); // Method Not Allowed
//   }
// }
