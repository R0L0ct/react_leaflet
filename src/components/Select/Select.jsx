import React from "react";
import { OptionStyled, SelectStyled } from "./SelectStyles";
import { calles } from "../../data/calles";
import { useDispatch, useSelector } from "react-redux";
import { selectStreet } from "../../redux/reducers/street/street.action";

export const Select = () => {
  const street = useSelector((state) => state.street.selectedStreet);
  const dispatch = useDispatch();
  return (
    <SelectStyled
      value={street}
      onChange={(e) => {
        dispatch(selectStreet(e.target.value));
      }}
    >
      <option value="">Selecciona una calle</option>
      {calles.map((s) => {
        return (
          <OptionStyled value={s} key={s}>
            {s}
          </OptionStyled>
        );
      })}
    </SelectStyled>
  );
};
