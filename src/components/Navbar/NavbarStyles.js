import { styled } from "styled-components";

export const NavbarContainerStyled = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: fixed;
  z-index: 9999;
  background-color: white;
`;

export const NavbarLinks = styled.div`
  :hover {
    color: purple;
  }
`;
export const LinkStyled = styled.p`
  font-weight: 600;
  cursor: pointer;
`;
