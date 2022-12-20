import React from "react";
import axios from "axios";

import { isIPAddress } from "ip-address-validator";
import arrowIcon from "../images/icon-arrow.svg";

const Search = (props) => {
  // [#] Save The Value Of The Input Feild
  const [ipAddress, setIpAddress] = React.useState("");

  // [#] Make API Get Request And Check Ip Address Validation
  async function submit(ipAddress) {
    let res = {};
    if (isIPAddress(ipAddress)) {
      // [#] Make The Get Request
      res = await axios
        .get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_vA5uJfP0zIA0n4ey7VxvKEvkbRIU5&ipAddress=${ipAddress}`
        )
        .catch(() => {
          console.log("Hi: Error InValid IP Address");
        });

      // [#] Destrucer The Data 
      const data = {
        isp: res.data.isp,
        city: res.data.location.city,
        timezone: res.data.location.timezone,
      };

      const mapinfo = {
        lat: res.data.location.lat,
        lng: res.data.location.lng,
      };

      // [#] Change The States Values
      props.setDisplayInfo(() => data);
      props.setIp(() => ipAddress);
      props.setMapinfo(() => ({ ...mapinfo }));
    }
  }

  // [#] Make submit Function Call If The User Press Enter Key
  function handleEnter(event) {
    let inputValue = event.target.value.trim();
    setIpAddress(() => inputValue);
    if (event.key === "Enter") {
      submit(ipAddress);
    }
  }

  // [#] Make submit Function Call If The User Click On The Button
  function btnClicked() {
    submit(ipAddress);
  }

  return (
    <section className="search">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        onKeyUp={handleEnter}
      />
      <button onClick={btnClicked}>
        <img src={arrowIcon} alt="arrow" />
      </button>
    </section>
  );
};

export default Search;
