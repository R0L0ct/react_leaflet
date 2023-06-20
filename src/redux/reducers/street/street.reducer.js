import { data } from "../../../data/data";
import { addSelectedStreets } from "../../../utils/addSelectedStreets";
import { selectStreet } from "../../../utils/selectStreet";
import {
  ADD_COORDENADAS,
  ADD_FORM_DATA,
  ADD_SELECTED_STREET,
  CLEAR_DATA,
  POLIGON_DATA,
  REMOVE_COOR,
  REMOVE_SELECTED_STREET,
  SELECT_STREET,
  TOGGLE_MENU,
} from "./street.action";

const INITIAL_STATE = {
  streets: [],
  selectedStreet: "",
  formData: [],
  hiddenMenu: false,
  coordenadas: [],
  fechaPoligono: "",
  poligon: "",
};

export const streetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_STREET:
      return {
        ...state,
        selectedStreet: selectStreet(action.payload),
      };
    case ADD_SELECTED_STREET:
      return {
        ...state,
        streets: addSelectedStreets(state.streets, action.payload),
      };
    case REMOVE_SELECTED_STREET:
      return {
        ...state,
        streets: state.streets.filter((s) => s !== action.payload),
      };
    case ADD_FORM_DATA:
      return {
        ...state,
        formData: [...state.formData, action.payload],
      };
    case CLEAR_DATA:
      return {
        ...state,
        streets: [],
        coordenadas: [],
      };
    case TOGGLE_MENU:
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };
    case ADD_COORDENADAS:
      return {
        ...state,
        coordenadas: [...state.coordenadas, action.payload],
      };
    case REMOVE_COOR:
      return {
        ...state,
        coordenadas: state.coordenadas.filter((c) => c !== action.payload),
      };
    case POLIGON_DATA:
      return {
        ...state,
        poligon: action.payload,
      };

    default:
      return state;
  }
};
