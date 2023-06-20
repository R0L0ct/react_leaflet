import { styled } from "styled-components";

export const RightMenuContainerStyled = styled.div`
  height: 30vh;
  min-width: 300px;
  position: fixed;
  background-color: purple;
  top: 20px;
  right: 0;
  z-index: 9999;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 10px;
  border-bottom-left-radius: 10px;
`;

export const PoligonListContainer = styled.div`
  font-weight: 600;
  color: purple;
  background-color: lightblue;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: auto;
`;

export const PoligonNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonStyled = styled.button`
  cursor: pointer;
`;

export const PoligonName = styled.p`
  cursor: pointer;
  font-weight: 600;
`;
