import React from "react";
import {
  ButtonAddStyled,
  ListContainerStyled,
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
  return (
    <SideMenuContainerStyled>
      <Select />
      <ButtonAddStyled
        onClick={() => {
          dispatch(streetActions.addSelectedStreet(selectedstreet));
          console.log(street);
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
            >
              <StreetsStyled>{s}</StreetsStyled>
              <button
                onClick={() => dispatch(streetActions.removeSelectedStreet(s))}
              >
                x
              </button>
            </div>
          );
        })}
      </ListContainerStyled>
    </SideMenuContainerStyled>
  );
};
