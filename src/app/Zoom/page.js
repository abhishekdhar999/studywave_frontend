"use client";

import dynamic from "next/dynamic";

const ZoomClient = dynamic(() => import("./ZoomClient.js"), {
  ssr: false,
});

export default function Zoom() {

  return(
    
   
    <ZoomClient />
    
  ) 
}



