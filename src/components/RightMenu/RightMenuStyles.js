import styled from "styled-components";

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
  @media (max-width: 840px) {
    min-width: 150px;
    height: 20vh;
    padding: 6px;
  }
  @media (max-width: 418px) {
    min-width: 100vw;
    height: 22vh;
    border-bottom-left-radius: 0px;
    padding: 0px;
  }
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
  @media (max-width: 418px) {
    border-radius: 0px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
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
  @media (max-width: 840px) {
    font-size: 12px;
  }
`;
