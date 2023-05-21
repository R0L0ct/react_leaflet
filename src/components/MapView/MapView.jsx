import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapView.css";
import { Markers } from "./Markers";
import StreetBoundsControl from "../StreetBoundsControl/StreetBoundsControl";
import { data } from "../../data/data";
import { Select } from "../Select/Select";
import { Control } from "leaflet";

export const MapView = () => {
  // const [calles, setCalles] = useState([]);
  // const [busqueda, setBusqueda] = useState("");

  const mapCenter = [-31.7446, -60.5176]; // Coordenadas de Paraná
  const maxBounds = [
    [-31.8642, -60.6741], // Coordenadas del límite inferior izquierdo
    [-31.6242, -60.3611], // Coordenadas del límite superior derecho
  ];
  const maxZoomOut = 12; // Nivel máximo de zoom permitido
  // const streets = [
  //   "España 537",
  //   "España 700",
  //   "Laprida 700",
  //   "Santiago del Estero 500",
  //   "Tejeiro Martinez 400",
  //   "Courreges 100",
  // ];
  function ZoomRestriction() {
    const map = useMapEvents({
      zoomend: () => {
        if (map.getZoom() < maxZoomOut) {
          map.setZoom(maxZoomOut);
        }
      },
    });

    return null;
  }
  return (
    <MapContainer
      center={mapCenter}
      zoom={maxZoomOut}
      dragging={true}
      touchZoom={true}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      zoomControl={false}
      maxBounds={maxBounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      <ZoomRestriction />
      {data.map((calle) => {
        return (
          <StreetBoundsControl
            // streets={calle.streets}
            key={calle.id}
            {...calle}
          />
        );
      })}
      <Markers />
    </MapContainer>
  );
};
