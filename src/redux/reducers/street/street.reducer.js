import {
  ADD_SELECTED_STREET,
  REMOVE_SELECTED_STREET,
  SELECT_STREET,
} from "./street.action";

const INITIAL_STATE = {
  streets: [],
  selectedStreet: "",
};

export const streetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_STREET:
      return {
        ...state,
        selectedStreet: action.payload,
      };
    case ADD_SELECTED_STREET:
      return {
        ...state,
        streets: [...state.streets, action.payload],
      };
    case REMOVE_SELECTED_STREET:
      return {
        ...state,
        streets: state.streets.filter((s) => s !== action.payload),
      };
    default:
      return state;
  }
};
