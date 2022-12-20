import React from "react";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import mySvgIcon from "../images/icon-location.svg";
import { icon } from "leaflet";

const myIcon = new icon({
  iconUrl: mySvgIcon,
  iconSize: [45],
});

const Map = (props) => {
  const { lat, lng } = props.mapinfo;

  function LocationMarker() {
    // [<!>] To Use useMap Hook You Have Nest The Hook Inside Component
    // [<!>] And Call The Component Inside MapContainer Component
    const map = useMap();
    map.flyTo([lat, lng], 10);

    return null;
  }

  return (
    <div className="leafletContainer">
      <MapContainer
        center={[lat, lng]}
        zoom={12}
        markerZoomAnimation={true}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lng]} icon={myIcon}>
          <Popup>You are here</Popup>
        </Marker>
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Map;
