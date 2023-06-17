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
import { useDispatch } from "react-redux";
import * as streetActions from "../../redux/reducers/street/street.action";
import { getPoligonos } from "../../api/data";
import { MoonLoader } from "react-spinners";

export const MapView = () => {
  const dispatch = useDispatch();
  // const coor = useSelector((state) => state.street.coordenadas);
  const [popupContent, setPopupContent] = useState(null);

  function MapClickHandler() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        const content = {
          latlng: e.latlng,
          content: ` ${lat.toFixed(4)}, ${lng.toFixed(4)}`,
        };
        setPopupContent(content);
        const response = window.confirm("Agregar coordenada?");
        if (response) {
          dispatch(streetActions.addCoordenadas({ lat: lat, lon: lng }));
        }
      },
    });
    return null;
  }

  // const formData = useSelector((state) => state.street.formData);
  const mapCenter = [-31.7446, -60.5176]; // Coordenadas de Paraná
  const maxBounds = [
    [-31.8642, -60.6741], // Coordenadas del límite inferior izquierdo
    [-31.6242, -60.3611], // Coordenadas del límite superior derecho
  ];
  // const [datos, setDatos] = useState(null);

  const [poligonData, setPoligonData] = useState([]);

  useEffect(() => {
    const fetchPoligonos = async () => {
      try {
        const data = await getPoligonos();
        console.log(data); // Imprime la respuesta en la consola
        setPoligonData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchPoligonos();
  }, []);

  // useEffect(() => {
  //   // Obtener los datos almacenados en el localStorage
  //   const datosAlmacenados = localStorage.getItem("formData");
  //   if (datosAlmacenados) {
  //     const datosObjeto = JSON.parse(datosAlmacenados);
  //     setDatos(datosObjeto);
  //   }
  // }, []);

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
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const [isLoading, setIsLoading] = useState(true);

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
      <ZoomControl position="bottomright" />
      <ZoomRestriction />
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "400px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <MoonLoader color="purple" width={100} cssOverride={override} />
        </div>
      ) : (
        poligonData?.data.map((coor) => {
          return <StreetBoundsControl key={coor.id} {...coor} />;
        })
      )}
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
