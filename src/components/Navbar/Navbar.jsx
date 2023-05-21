import React, { useState } from "react";
import { LinkStyled, NavbarContainerStyled, NavbarLinks } from "./NavbarStyles";
import { SideMenu } from "../SideMenu/SideMenu";

export const Navbar = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <NavbarContainerStyled>
      <NavbarLinks>
        <LinkStyled onClick={() => setHidden(!hidden)}>
          Agregar Poligono
        </LinkStyled>
      </NavbarLinks>
      {!hidden && <SideMenu />}
    </NavbarContainerStyled>
  );
};
