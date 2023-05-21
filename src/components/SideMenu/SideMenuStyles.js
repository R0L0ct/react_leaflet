import { styled } from "styled-components";

export const SideMenuContainerStyled = styled.div`
  height: 100vh;
  width: 500px;
  position: fixed;
  background-color: white;
  top: 20px;
  left: 0;
  z-index: 9999;
  border-top-right-radius: 10px;
`;

export const ButtonAddStyled = styled.button``;

export const ListContainerStyled = styled.div`
  width: 100%;
  background-color: gray;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 200px;
  overflow: auto;
`;
export const StreetsStyled = styled.p`
  font-weight: 600;
  color: white;
`;
