import React, { useState } from "react";
import {
  FormStyled,
  InputContainerStyled,
  LabelStyled,
  ListContainerStyled,
  RadioContainerStyled,
  RadioStyled,
  SideMenuContainerStyled,
  StreetsStyled,
} from "./SideMenuStyles";
import { useDispatch, useSelector } from "react-redux";
import * as streetActions from "../../redux/reducers/street/street.action";
import { addCoordenadas, addPoligono } from "../../api/data";

export const SideMenu = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.street.formData);
  const coordenadas = useSelector((state) => state.street.coordenadas);
  const [radioValue, setRadioValue] = useState("activo");
  const [nombre, setNombre] = useState("");

  return (
    <SideMenuContainerStyled>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        onClick={() => dispatch(streetActions.toggleMenu())}
      >
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "20px",
            height: "20px",
          }}
        >
          x
        </button>
      </div>
      <FormStyled
        onSubmit={async (e) => {
          e.preventDefault();
          const fechaActual = new Date();
          dispatch(
            streetActions.addFormData({
              id: formData.length + 1,
              coor: [coordenadas],
              status: radioValue,
              createdAt: fechaActual,
            })
          );
          const responsePoligono = await addPoligono({
            name: nombre,
            status: radioValue,
          });

          const poligonoId = responsePoligono.data.id;
          coordenadas.map(async (c) => {
            await addCoordenadas({
              lat: c.lat,
              lon: c.lon,
              poligonoId: poligonoId,
            });
          });

          // await getPoligonos();

          dispatch(streetActions.clearData());
          dispatch(streetActions.selectStreet(""));
          // Reiniciar la página
          window.location.reload();
        }}
      >
        <InputContainerStyled>
          <label
            htmlFor="nombre-poligono"
            style={{ color: "black", fontWeight: "600" }}
          >
            Nombre:
          </label>
          <input
            type="text"
            id="nombre-poligono"
            onChange={(e) => setNombre(e.target.value)}
          />
        </InputContainerStyled>

        <ListContainerStyled>
          {coordenadas.map((s) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                key={`${s.lat}-${s.lon}`}
              >
                <StreetsStyled>{`${s.lat} ${s.lon}`}</StreetsStyled>
                <button
                  onClick={() => {
                    dispatch(streetActions.removeSelectedCoor(s));
                  }}
                  type="button"
                >
                  x
                </button>
              </div>
            );
          })}
        </ListContainerStyled>
        <RadioContainerStyled>
          <RadioStyled>
            <input
              type="radio"
              id="activo"
              name="opciones"
              value="Activo"
              defaultChecked
              onClick={() => setRadioValue("activo")}
            />
            <LabelStyled htmlFor="activo">Activo</LabelStyled>
          </RadioStyled>
          <RadioStyled>
            <input
              type="radio"
              id="inactivo"
              name="opciones"
              value="Inactivo"
              onClick={() => setRadioValue("inactivo")}
            />
            <LabelStyled htmlFor="inactivo">Inactivo</LabelStyled>
          </RadioStyled>
          <RadioStyled>
            <input
              type="radio"
              id="reforzar"
              name="opciones"
              value="Reforzar"
              onClick={() => setRadioValue("reforzar")}
            />
            <LabelStyled htmlFor="reforzar">Reforzar</LabelStyled>
          </RadioStyled>
        </RadioContainerStyled>

        <button type="submit" style={{ cursor: "pointer" }}>
          Agregar
        </button>
      </FormStyled>
    </SideMenuContainerStyled>
  );
};
