import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  ZoomControl,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapView.css";
import { Markers } from "./Markers";
import StreetBoundsControl from "../StreetBoundsControl/StreetBoundsControl";
import { useSelector } from "react-redux";

export const MapView = () => {
  // const [calles, setCalles] = useState([]);
  // const [busqueda, setBusqueda] = useState("");

  const [popupContent, setPopupContent] = useState(null);

  function MapClickHandler() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        const content = {
          latlng: e.latlng,
          content: `You clicked the map at ${lat.toFixed(4)}, ${lng.toFixed(
            4
          )}`,
        };
        setPopupContent(content);
      },
    });
    return null;
  }

  const formData = useSelector((state) => state.street.formData);
  const mapCenter = [-31.7446, -60.5176]; // Coordenadas de Paraná
  const maxBounds = [
    [-31.8642, -60.6741], // Coordenadas del límite inferior izquierdo
    [-31.6242, -60.3611], // Coordenadas del límite superior derecho
  ];
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    // Obtener los datos almacenados en el localStorage
    const datosAlmacenados = localStorage.getItem("formData");
    if (datosAlmacenados) {
      const datosObjeto = JSON.parse(datosAlmacenados);
      setDatos(datosObjeto);
    }
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const maxZoomOut = 12; // Nivel máximo de zoom permitido

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
      {datos
        ? datos.map((calle) => {
            return <StreetBoundsControl key={calle.id} {...calle} />;
          })
        : formData.map((calle) => {
            return <StreetBoundsControl key={calle.id} {...calle} />;
          })}
      <Markers />
      <MapClickHandler />
      {popupContent && (
        <Popup
          position={popupContent?.latlng}
          onClose={() => setPopupContent(null)}
        >
          <div>{popupContent?.content}</div>
        </Popup>
      )}
    </MapContainer>
  );
};
