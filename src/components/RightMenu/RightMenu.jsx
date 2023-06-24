import React, { useEffect, useState } from "react";
import {
  ButtonStyled,
  PoligonListContainer,
  PoligonName,
  PoligonNameContainer,
  RightMenuContainerStyled,
} from "./RightMenuStyles";
import { deletePoligono, getPoligonos } from "../../api/data";
import { useDispatch, useSelector } from "react-redux";
import * as streetActions from "../../redux/reducers/street/street.action";

export const RightMenu = () => {
  const [poligonData, setPoligonData] = useState([]);
  const [poligonId, setPoligonId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPoligonos = async () => {
      try {
        const data = await getPoligonos();
        console.log(data); // Imprime la respuesta en la consola
        setPoligonData(data);
        setPoligonId(data.data.map((id) => id.id));
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
                  <PoligonName
                    onClick={() => {
                      if (poligonId.find((p) => p !== nombre.id)) {
                        dispatch(streetActions.poligonData(nombre.id));
                      }

                      console.log(poligonId);
                    }}
                  >
                    {nombre.name}
                  </PoligonName>
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
