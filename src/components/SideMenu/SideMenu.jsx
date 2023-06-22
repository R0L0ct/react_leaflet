import React, { useEffect, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import {
  ButtonListStyled,
  FormStyled,
  InputContainerStyled,
  LabelStyled,
  ListContainerStyled,
  RadioContainerStyled,
  RadioStyled,
  SideMenuContainerStyled,
  StreetsStyled,
} from "./SideMenuStyles";
import { useDispatch, useSelector } from "react-redux";
import * as streetActions from "../../redux/reducers/street/street.action";
import {
  addCoordenadas,
  addPoligono,
  deleteCoordenadas,
  getPoligono,
  updateCoordenadas,
  updatePoligono,
} from "../../api/data";

export const SideMenu = () => {
  const dispatch = useDispatch();
  // const formData = useSelector((state) => state.street.formData);
  const coordenadas = useSelector((state) => state.street.coordenadas);
  const [nombre, setNombre] = useState("");
  const poligonId = useSelector((state) => state.street.poligon);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPoligono, setCurrentPoligono] = useState("");
  const [radioValue, setRadioValue] = useState("activo");
  const editmode = useSelector((s) => s.street.editMode);

  const getCurrentPoligono = async () => {
    try {
      const data = await getPoligono(poligonId);
      setCurrentPoligono(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (poligonId) {
      getCurrentPoligono();
    }
  }, [poligonId]);

  useEffect(() => {
    if (!isLoading && currentPoligono) {
      setNombre(currentPoligono.data.name);
      setRadioValue(currentPoligono.data.status);
      currentPoligono?.data.coordenadas.forEach((c) => {
        dispatch(
          streetActions.addCoordenadas({
            lat: parseFloat(c.lat),
            lon: parseFloat(c.lon),
            id: c.id,
          })
        );
      });
    }
  }, [isLoading, currentPoligono]);

  return (
    <SideMenuContainerStyled>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        onClick={() => dispatch(streetActions.toggleMenu())}
      >
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "20px",
            height: "20px",
          }}
        >
          x
        </button>
      </div>
      <FormStyled
        onSubmit={async (e) => {
          e.preventDefault();

          if (currentPoligono) {
            coordenadas.map(async (c) => {
              await updateCoordenadas(poligonId, {
                lat: c.lat,
                lon: c.lon,
              });
            });
            await updatePoligono(poligonId, {
              name: nombre,
              status: radioValue,
            });

            dispatch(streetActions.selectStreet(""));
            // Reiniciar la página
            window.location.reload();
          } else {
            const responsePoligono = await addPoligono({
              name: nombre,
              status: radioValue,
            });

            const poligonoId = responsePoligono.data.id;
            coordenadas.map(async (c) => {
              await addCoordenadas({
                lat: c.lat,
                lon: c.lon,
                poligonoId: poligonoId,
              });
            });

            dispatch(streetActions.selectStreet(""));
            // Reiniciar la página
            window.location.reload();
          }
        }}
      >
        <InputContainerStyled>
          <label
            htmlFor="nombre-poligono"
            style={{ color: "black", fontWeight: "600" }}
          >
            Nombre:
          </label>
          <input
            type="text"
            id="nombre-poligono"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            placeholder="Ingrese el nombre de la zona"
            value={nombre}
          />
        </InputContainerStyled>

        <ListContainerStyled>
          {coordenadas.map((s) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                key={`${s.lat}-${s.lon}-${s.id}`}
              >
                <StreetsStyled>{`${s.lat} ${s.lon}`}</StreetsStyled>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <ButtonListStyled
                    onClick={() => {
                      const response = window.confirm(
                        "Desea modificar la coordenada?"
                      );
                      if (response) {
                        dispatch(streetActions.editMode(s));
                      }
                    }}
                    type="button"
                  >
                    <BsFillPencilFill />
                  </ButtonListStyled>
                  <ButtonListStyled
                    onClick={async () => {
                      const response = window.confirm(
                        "Desea eliminar la coordenada?"
                      );
                      if (response) {
                        dispatch(streetActions.removeSelectedCoor(s));
                        await deleteCoordenadas(s.id);
                      }
                    }}
                    type="button"
                  >
                    x
                  </ButtonListStyled>
                </div>
              </div>
            );
          })}
        </ListContainerStyled>
        <RadioContainerStyled>
          <RadioStyled>
            <input
              type="radio"
              id="activo"
              name="opciones"
              value="Activo"
              onChange={(e) => {
                setRadioValue(e.target.value);
              }}
              checked={radioValue}
              onClick={() => setRadioValue("activo")}
            />
            <LabelStyled htmlFor="activo">Activo</LabelStyled>
          </RadioStyled>
          <RadioStyled>
            <input
              type="radio"
              id="inactivo"
              name="opciones"
              value="Inactivo"
              onChange={(e) => {
                setRadioValue(e.target.value);
              }}
              checked={radioValue}
              onClick={() => setRadioValue("inactivo")}
            />
            <LabelStyled htmlFor="inactivo">Inactivo</LabelStyled>
          </RadioStyled>
          <RadioStyled>
            <input
              type="radio"
              id="reforzar"
              name="opciones"
              value="Reforzar"
              onChange={(e) => {
                setRadioValue(e.target.value);
              }}
              checked={radioValue}
              onClick={() => setRadioValue("reforzar")}
            />
            <LabelStyled htmlFor="reforzar">Reforzar</LabelStyled>
          </RadioStyled>
        </RadioContainerStyled>
        {currentPoligono ? (
          <button type="submit" style={{ cursor: "pointer" }}>
            Modificar
          </button>
        ) : (
          <button type="submit" style={{ cursor: "pointer" }}>
            Agregar
          </button>
        )}
      </FormStyled>
    </SideMenuContainerStyled>
  );
};
