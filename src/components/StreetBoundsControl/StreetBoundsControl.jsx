import { Polygon } from "react-leaflet";

function StreetBoundsControl({ coordenadas, status }) {
  const coordinates = coordenadas.map((c) => [c.lat, c.lon]);

  return (
    <Polygon
      positions={coordinates}
      color={
        status === "activo" ? "purple" : status === "inactivo" ? "gray" : "red"
      }
    />
  );
}

export default StreetBoundsControl;
