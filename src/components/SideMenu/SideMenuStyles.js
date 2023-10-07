import styled from "styled-components";

export const SideMenuContainerStyled = styled.div`
  height: 100vh;
  min-width: 500px;
  position: fixed;
  background-color: white;
  top: 20px;
  left: 0;
  z-index: 9999;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px 0 10px;
  @media (max-width: 840px) {
    min-width: 200px;
  }
  @media (max-width: 418px) {
    top: 221px;
    height: calc(100vh - 221px);
    min-width: 100vw;
    padding: 0;
    padding-top: 5px;
  }
`;

export const FormStyled = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  @media (max-width: 840px) {
    width: 100%;
  }
`;

export const ButtonAddStyled = styled.button`
  width: 50px;
  cursor: pointer;

  @media (max-width: 840px) {
    width: 100%;
  }
`;

export const ListContainerStyled = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 200px;
  padding: 10px;
  border-radius: 10px;
  overflow: auto;
  @media (max-width: 840px) {
    padding: 5px;
  }
  @media (max-width: 418px) {
    border-radius: 0px;
  }
`;
export const StreetsStyled = styled.p`
  font-weight: 600;
  color: white;
  @media (max-width: 840px) {
    font-size: 10px;
  }
`;

export const RadioContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const RadioStyled = styled.div`
  width: 100px;
  display: flex;
  gap: 5px;
  color: black;
`;

export const InputContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

export const ButtonListStyled = styled.button`
  cursor: pointer;
  width: 40px;
  height: 25px;
  @media (max-width: 840px) {
    width: 20px;
    height: 15px;
    font-size: 10px;
  }
`;

export const InputZoneContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  font-weight: 600;
`;

export const InputZone = styled.input`
  outline: none;
  @media (max-width: 840px) {
    font-size: 10px;
  }
`;
export const TextAreaZone = styled.textarea`
  outline: none;
  @media (max-width: 840px) {
    font-size: 10px;
  }
`;

export const UpdateButtonStyled = styled.button`
  font-size: 25px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: red;
  :hover {
    color: green;
  }
`;

export const NameLabelStyled = styled.label`
  font-weight: 600;
  color: purple;
  @media (max-width: 840px) {
    font-size: 15px;
  }
`;

export const AddButtonStyled = styled.button`
  cursor: pointer;
  background-color: purple;
  border: none;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  padding: 3px;
  :hover {
    color: purple;
    background: transparent;
    box-shadow: inset 0 0 0 2px purple;
  }
`;

export const InputNameStyled = styled.input`
  outline: none;
  width: 200px;
  @media (max-width: 840px) {
    width: 80%;
  }
  @media (max-width: 418px) {
    font-size: 10px;
  }
`;
