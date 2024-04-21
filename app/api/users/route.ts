// import { request } from "http";
// import { NextApiRequest, NextApiResponse } from "next";
// import { NextRequest } from "next/server";
// // import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//   const data = await fetch("http://127.0.0.1:8000/api/login").then((res) =>
//     res.json()
//   );
//   return Response.json({ status: 200, data: data });
// }

// export async function POST(request: any) {
//   console.log("Request is ", await request.formData());
//   return Response.json({ status: 200 });
// }

// // // Handler for the POST method
// // export async function handlePost(req: NextApiRequest, res: NextApiResponse) {
// //   if (req.method === "POST") {
// //     // Handle the POST request here
// //     const data = await fetch("http://127.0.0.1:8000/api/login").then((res) =>
// //       res.json()
// //     );
// //     res.status(200).json({ message: "POST request received" });
// //   } else {
// //     res.status(405).end(); // Method Not Allowed
// //   }
// // }

// // // Handler for the GET method
// // export async function handleGet(req: NextApiRequest, res: NextApiResponse) {
// //   if (req.method === "GET") {
// //     // Handle the GET request here
// //     res.status(200).json({ message: "GET request received" });
// //   } else {
// //     res.status(405).end(); // Method Not Allowed
// //   }
// // }
