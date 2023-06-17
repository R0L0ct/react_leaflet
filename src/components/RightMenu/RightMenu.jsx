import React, { useEffect, useState } from "react";
import {
  ButtonStyled,
  PoligonListContainer,
  PoligonNameContainer,
  RightMenuContainerStyled,
} from "./RightMenuStyles";
import { deletePoligono, getPoligonos } from "../../api/data";

export const RightMenu = () => {
  const [poligonData, setPoligonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPoligonos = async () => {
      try {
        const data = await getPoligonos();
        console.log(data); // Imprime la respuesta en la consola
        setPoligonData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchPoligonos();
  }, []);

  return (
    <RightMenuContainerStyled>
      <PoligonListContainer>
        {isLoading
          ? console.log("cargando...")
          : poligonData.data.map((nombre) => {
              return (
                <PoligonNameContainer key={nombre.id}>
                  {nombre.name}
                  <ButtonStyled
                    onClick={() => {
                      const response = window.confirm(
                        "Desea eliminar el poligono?"
                      );
                      if (response) {
                        deletePoligono(nombre.id);
                        window.location.reload();
                      }
                    }}
                  >
                    x
                  </ButtonStyled>
                </PoligonNameContainer>
              );
            })}
      </PoligonListContainer>
    </RightMenuContainerStyled>
  );
};
