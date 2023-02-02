import { IpDataTypes } from "../App";

function IpInfoComp({ ipAddress, location, timezone, isp }: IpDataTypes) {
  return (
    <div className="absolute left-0 right-0 mx-auto -bottom-32 md:-bottom-16 bg-white rounded-2xl flex flex-col md:flex-row justify-between items-center w-3/4 h-64 md:h-32 px-8 z-[9999] py-4 md:py-0">
      <div>
        <span className="text-gray-400 text-xs font-bold uppercase">
          IP Address
        </span>
        <p className="text-gray-900 text-lg font-bold">
          {ipAddress || "192.212.68.11"}
        </p>
      </div>
      <div>
        <span className="text-gray-400 text-xs font-bold uppercase">
          Location
        </span>
        <p className="text-gray-900 text-lg font-bold">
          {location || "Any Location, Greenwalley, UK"}
        </p>
      </div>
      <div>
        <span className="text-gray-400 text-xs font-bold uppercase">
          Timezone
        </span>
        <p className="text-gray-900 text-lg font-bold">{timezone || "UTC+4"}</p>
      </div>
      <div>
        <span className="text-gray-400 text-xs font-bold uppercase">
          ISP
        </span>
        <p className="text-gray-900 text-lg font-bold">
          {isp || "Any ISP, Good"}
        </p>
      </div>
    </div>
  );
}

export default IpInfoComp;
