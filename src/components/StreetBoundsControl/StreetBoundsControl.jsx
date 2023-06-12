import { Polygon } from "react-leaflet";

function StreetBoundsControl({ coor, status }) {
  const coors = coor.map((c) => c);
  const coordinates = [coors];

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
