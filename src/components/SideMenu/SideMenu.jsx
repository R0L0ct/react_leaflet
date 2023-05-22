import React, { useState } from "react";
import {
  ButtonAddStyled,
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
  const [radioValue, setRadioValue] = useState("activo");
  const [inputNumber, setInputNumber] = useState("");

  const guardarDatosEnLocalStorage = (clave, valor) => {
    const datos = JSON.stringify(valor);
    localStorage.setItem(clave, datos);
  };

  return (
    <SideMenuContainerStyled>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            streetActions.addFormData({
              id: formData.length + 1,
              streets: [street],
              status: radioValue,
            })
          );
          guardarDatosEnLocalStorage("formData", [
            {
              id: formData.length + 1,
              streets: street,
              status: radioValue,
            },
          ]);
          dispatch(streetActions.clearData());
          dispatch(streetActions.selectStreet(""));
        }}
      >
        <Select />
        <input
          type="number"
          onChange={(e) => {
            setInputNumber(e.target.value);
            console.log(inputNumber);
          }}
        />
        <ButtonAddStyled
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
        </ButtonAddStyled>
        <ListContainerStyled>
          {street.map((s) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                key={s}
              >
                <StreetsStyled>{s}</StreetsStyled>
                <button
                  onClick={() => {
                    dispatch(streetActions.removeSelectedStreet(s));
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

        <button type="submit">Agregar</button>
      </form>
    </SideMenuContainerStyled>
  );
};
