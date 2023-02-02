import { IpDataTypes } from "../App";

function IpInfoComp({ ipAddress, location, timezone, isp }: IpDataTypes) {
  return (
    <div className="absolute left-0 right-0 mx-auto -bottom-16 bg-white rounded-2xl flex flex-col md:flex-row justify-between items-center w-3/4 h-32 px-8">
      <div>
        <span className="text-slate-500 text-base font-bold">Span Name</span>
        <p className="text-gray-900 text-lg font-bold">
          {ipAddress || "192.212.68.11"}
        </p>
      </div>
      <div>
        <span className="text-slate-500 text-base font-bold">Span Name</span>
        <p className="text-gray-900 text-lg font-bold">
          {location || "Any Location, Greenwalley, UK"}
        </p>
      </div>
      <div>
        <span className="text-slate-500 text-base font-bold">Span Name</span>
        <p className="text-gray-900 text-lg font-bold">{timezone || "UTC+4"}</p>
      </div>
      <div>
        <span className="text-slate-500 text-base font-bold">Span Name</span>
        <p className="text-gray-900 text-lg font-bold">
          {isp || "Any ISP, Good"}
        </p>
      </div>
    </div>
  );
}

export default IpInfoComp;
