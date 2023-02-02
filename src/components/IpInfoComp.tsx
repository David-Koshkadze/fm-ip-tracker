import React from "react";
import { IpDataTypes } from "../App";

function IpInfoComp({ ipAddress, location, timezone, isp }: IpDataTypes) {
  return (
    <div className="absolute left-0 right-0 mx-auto -bottom-16 bg-white rounded-2xl flex justify-between w-3/4 h-32 ">
      <p>{ipAddress}</p>
      <p>{location}</p>
      <p>{timezone}</p>
      <p>{isp}</p>
    </div>
  );
}

export default IpInfoComp;
