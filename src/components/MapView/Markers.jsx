import { Marker } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import React from "react";
import { Icon } from "leaflet";

export const Markers = () => {
  return (
    <Marker
      position={[-31.7446, -60.5179]}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
    />
  );
};
