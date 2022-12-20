import React from "react";
import backgroundImage from "../images/pattern-bg.png";

import Search from "./Search";
import DisplayInfo from "./DisplayInfo";
import Map from "./Map";



const App = () => {
  // [#] Ip State
  const [ip, setIp] = React.useState("192.212.174.101");

  // [#] displayInfo State
  const [displayInfo, setDisplayInfo] = React.useState({
    city: "South San Gabriel",
    timezone: "-08:00",
    isp: "Southern California Edison",
  });

  // [#] mapinfo State
  const [mapinfo, setMapinfo] = React.useState({
    lat: 34.04915,
    lng: -118.09462,
  });

  return (
    <main>
      <h1>IP Address Tracker</h1>
      <img src={backgroundImage} alt="BackGround" />
      <Search
        setIp={setIp}
        setDisplayInfo={setDisplayInfo}
        setMapinfo={setMapinfo}
      />
      <DisplayInfo ipAddress={ip} displayInfo={displayInfo} />
      <Map mapinfo={mapinfo} />
    </main>
  );
};

export default App;
