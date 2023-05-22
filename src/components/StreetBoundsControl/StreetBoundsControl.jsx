import { useRef, useEffect } from "react";
import Nominatim from "nominatim-geocoder";
import { Polygon } from "react-leaflet";

function StreetBoundsControl({ streets, status }) {
  const polygonRef = useRef(null);
  const coordinates = [];

  useEffect(() => {
    const geocoder = new Nominatim();
    const getCoordinates = async (street) => {
      try {
        const results = await geocoder.search({
          q: street + ", Paraná, Argentina",
          limit: 1,
        });
        if (results.length > 0) {
          const { lat, lon } = results[0];
          coordinates.push([lat, lon]);
          polygonRef.current && polygonRef.current.setLatLngs(coordinates);
          // setColorBasedOnStatus(status);
        }
      } catch (error) {
        console.log(error);
      }
    };
    // const setColorBasedOnStatus = (status) => {
    //   if (status === "activo") {
    //     polygonRef.current.setStyle({ color: "purple" });
    //   } else if (status === "inactivo") {
    //     polygonRef.current.setStyle({ color: "gray" });
    //   } else {
    //     polygonRef.current.setStyle({ color: "red" });
    //   }
    // };

    streets.forEach(getCoordinates);
  }, [streets]);

  // const getColor = () => {
  //   if (status === "activo") {
  //     return "purple";
  //   } else if (status === "inactivo") {
  //     return "gray";
  //   } else {
  //     return "red";
  //   }
  // };
  return (
    <Polygon
      ref={polygonRef}
      positions={coordinates}
      color={
        status === "activo" ? "purple" : status === "inactivo" ? "gray" : "red"
      }
      // color={getColor()}
    />
  );
}

export default StreetBoundsControl;
