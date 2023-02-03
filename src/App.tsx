import { useState } from "react";
import axios from "axios";
import IpInfoComp from "./components/IpInfoComp";
import Search from "./components/Search";
import patternBg from "./assets/pattern-bg.png";
import MapLeaf from "./components/MapLeaf";

export interface IpDataTypes {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [ipData, setIpData] = useState<any>({});

  const URL: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_APP_IPIFY_KEY}&ipAddress=${inputValue}`;

  const handleSubmit = (event: any) => {
    event.preventDefault();

    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setIpData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-center">
      <div
        style={{ backgroundImage: `url(${patternBg})` }}
        className="relative bg-no-repeat w-full h-[300px] bg-cover flex flex-col justify-start md:justify-center gap-4 pt-0"
      >
        <div className="mt-12 md:mt-0">
          <h1 className="text-white font-bold text-3xl mb-4">
            IP Address Tracker
          </h1>
          <Search
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
        <IpInfoComp
          ipAddress={ipData.ip}
          location={`${ipData.location?.city}, ${ipData.location?.region}, ${ipData.location?.country}`}
          timezone={ipData.location?.timezone}
          isp={ipData?.isp}
        />
      </div>
      <MapLeaf
        latitude={ipData.location?.lat}
        longitude={ipData.location?.lng}
      />
    </div>
  );
}

export default App;
