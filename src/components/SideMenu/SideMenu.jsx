import React, { useState } from "react";
import {
  ButtonAddStyled,
  FormStyled,
  LabelStyled,
  ListContainerStyled,
  RadioContainerStyled,
  RadioStyled,
  SideMenuContainerStyled,
  StreetsStyled,
} from "./SideMenuStyles";
import { Select } from "../Select/Select";
import { useDispatch, useSelector } from "react-redux";
import * as streetActions from "../../redux/reducers/street/street.action";

export const SideMenu = () => {
  const dispatch = useDispatch();
  const selectedstreet = useSelector((state) => state.street.selectedStreet);
  const street = useSelector((state) => state.street.streets);
  const formData = useSelector((state) => state.street.formData);
  const coordenadas = useSelector((state) => state.street.coordenadas);
  const [radioValue, setRadioValue] = useState("activo");
  const [inputNumber, setInputNumber] = useState("");

  const guardarDatosEnLocalStorage = (clave, valor) => {
    const datos = JSON.stringify(valor);
    localStorage.setItem(clave, datos);
  };

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
        onSubmit={(e) => {
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
          guardarDatosEnLocalStorage("formData", [
            {
              id: formData.length + 1,
              coor: coordenadas,
              status: radioValue,
              createdAt: fechaActual,
            },
          ]);
          dispatch(streetActions.clearData());
          dispatch(streetActions.selectStreet(""));
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          {/* <Select />
          <input
            style={{ width: "70px" }}
            type="number"
            onChange={(e) => {
              setInputNumber(e.target.value);
              console.log(inputNumber);
            }}
            placeholder="nro"
          /> */}
          {/* <ButtonAddStyled
            type="button"
            onClick={() => {
              dispatch(
                streetActions.addSelectedStreet(
                  `${selectedstreet} ${inputNumber}`
                )
              );
            }}
          >
            +
          </ButtonAddStyled> */}
        </div>
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
