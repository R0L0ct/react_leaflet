import { data } from "../../../data/data";
import { addSelectedStreets } from "../../../utils/addSelectedStreets";
import { selectStreet } from "../../../utils/selectStreet";
import {
  ADD_FORM_DATA,
  ADD_SELECTED_STREET,
  CLEAR_DATA,
  REMOVE_SELECTED_STREET,
  SELECT_STREET,
} from "./street.action";

const INITIAL_STATE = {
  streets: [],
  selectedStreet: "",
  formData: data,
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
      };

    default:
      return state;
  }
};
