import React from "react";

const DisplayInfo = (props) => {
  const {displayInfo} = props;
  return (
    <section className="display-info">
      <article className="info-contan">
        <h4>IP Address</h4>
        <p>{props.ipAddress}</p>
      </article>
      <article className="info-contan border">
        <h4>location</h4>
        <p>{displayInfo.city}</p>
      </article>
      <article className="info-contan border">
        <h4>timezone</h4>
        <p>{displayInfo.timezone}</p>
      </article>
      <article className="info-contan border">
        <h4>isp</h4>
        <p>{displayInfo.isp}</p>
      </article>
    </section>
  );
};

export default DisplayInfo;
