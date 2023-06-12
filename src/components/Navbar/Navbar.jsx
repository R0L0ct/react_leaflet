import React from "react";
import { LinkStyled, NavbarContainerStyled, NavbarLinks } from "./NavbarStyles";
import { SideMenu } from "../SideMenu/SideMenu";
import { useDispatch, useSelector } from "react-redux";
import * as streetActions from "../../redux/reducers/street/street.action";

export const Navbar = () => {
  const toggleMenu = useSelector((state) => state.street.hiddenMenu);
  const dispatch = useDispatch();
  return (
    <NavbarContainerStyled>
      <NavbarLinks>
        <LinkStyled onClick={() => dispatch(streetActions.toggleMenu())}>
          Agregar Poligono
        </LinkStyled>
      </NavbarLinks>
      {!toggleMenu && <SideMenu />}
    </NavbarContainerStyled>
  );
};
