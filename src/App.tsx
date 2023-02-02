import { useState } from "react";
import axios from "axios";
import IpInfoComp from "./components/IpInfoComp";
import Search from "./components/Search";
import patternBg from "./assets/pattern-bg.png";

const API_KEY = "at_ItPWnXly4w5ik4PMO8blGk9rAIUoZ";

export interface IpDataTypes {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [ipData, setIpData] = useState<any>({});

  const URL: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${inputValue}`;

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
        className="relative bg-no-repeat w-full h-[200px] bg-cover flex flex-col justify-center gap-4"
      >
        <h1 className="text-white text-2xl">IP Address Tracker</h1>
        <Search handleSubmit={handleSubmit} />
        <IpInfoComp
          ipAddress={ipData.ip}
          location={`${ipData.location?.city}, ${ipData.location?.region}, ${ipData.location?.country}`}
          timezone={ipData.location?.timezone}
          isp={ipData?.isp}
        />
      </div>
      <div className="w-full bg-gray-600 h-screen"></div>
    </div>
  );
}

export default App;
