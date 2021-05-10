import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MyMapPage = (props) => {
  return (
    <MapContainer
      center={[props.lng, props.lat]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.lng, props.lat]}>
        <Popup>{props.name}</Popup>
      </Marker>
    </MapContainer>
  );
};
export default MyMapPage;
