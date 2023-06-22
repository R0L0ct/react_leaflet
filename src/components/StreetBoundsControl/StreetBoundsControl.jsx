import { Polygon } from "react-leaflet";
import { useDispatch } from "react-redux";
import * as streetActions from "../../redux/reducers/street/street.action";

function StreetBoundsControl({ coordenadas, status }) {
  const coordinates = coordenadas.map((c) => [c.lat, c.lon]);
  const poligonId = coordenadas.map((c) => c.poligonoId);
  const dispatch = useDispatch();

  return (
    <Polygon
      positions={coordinates}
      color={
        status === "activo" ? "purple" : status === "inactivo" ? "gray" : "red"
      }
      eventHandlers={{
        click: () => dispatch(streetActions.poligonData(poligonId[0])),
      }}
    />
  );
}

export default StreetBoundsControl;
