"use client";

import { ZoomMtg } from "@zoom/meetingsdk";
import axios from "axios";

import "@zoom/meetingsdk/dist/css/bootstrap.css";
import "@zoom/meetingsdk/dist/css/react-select.css";

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// const sdkKey = "5PlC5zwKR51_6l2Cj8Q8A";
//   const sdkSecret = "W12DEoAt47n7QTxu9vnFmQ6v9pFa2HL4";
export default function ZoomClient() {
    
    console.log("in")
  const authEndpoint = "http://localhost:3001/meeting/createsignature"; // Replace with your backend
  const sdkKey = "5PlC5zwKR51_6l2Cj8Q8A";
  const meetingNumber = "692 327 0862";
  const passWord = "Rv0h95";
  const role = 1; // 0 = Attendee, 1 = Host
  const userName = "Abhishek Dhar";
  const userEmail = ""; // Optional
  const registrantToken = ""; // Optional
  const zakToken = ""; // Optional
   const leaveUrl = "http://localhost:3000"; // Redirect after leave
//    const res = await axios.get('http://localhost:3001/class/today', {
//     headers: { Authorization: `Bearer ${token}` }
//   });
  const getSignature = async () => {
    console.log(" in get signature")
    try {
        const token = localStorage.getItem('token');
      const res = await axios.get("http://localhost:3001/meeting/createsignature", {
       headers: { Authorization: `Bearer ${token}`,
       "Content-Type": "application/json"
     },
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          meetingNumber,
          role,
        }),
      });

      const data =  res;
      console.log("data ee",data)
      const signature = data.data.signature;
console.log("signature",signature)
      if (signature) {
        startMeeting(signature);
      }
    } catch (err) {
      console.error("Error fetching signature:", err);
    }
  };

  const startMeeting = (signature) => {

    console.log("in start meeting")
    const rootEl = document.getElementById("zmmtg-root");
    if (rootEl) rootEl.style.display = "block";
console.log("sig",signature)

ZoomMtg.init({
    leaveUrl,
    isSupportAV: true,
    success: () => {
      ZoomMtg.join({
        signature,
        sdkKey,
        meetingNumber,
        passWord,
        userName,
        success: () => console.log("✅ Joined meeting"),
        error: (err) => console.error("❌ Join error", err),
      });
    },
    error: (err) => console.error("❌ Init error", err),
  });
};

startMeeting();

    // Delay to allow DOM to load
    // setTimeout(() => {
    //   const root = document.getElementById("zmmtg-root");
    //   if (root) root.style.display = "block";
    //   startMeeting();
    // }, 1000);
  


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Zoom Meeting SDK Sample (Next.js - JS)</h1>
      <button
        onClick={getSignature}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Join Meeting
      </button>

      {/* This is where Zoom renders its UI */}
      <div id="zmmtg-root" className="h-screen w-screen z-50 block"></div>
    </div>
  );
}




