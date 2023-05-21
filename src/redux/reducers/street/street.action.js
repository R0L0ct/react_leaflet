export const SELECT_STREET = "SELECT_STREET";
export const ADD_SELECTED_STREET = "ADD_SELECTED_STREET";
export const REMOVE_SELECTED_STREET = "REMOVE_SELECTED_STREET";

export const selectStreet = (street) => ({
  type: SELECT_STREET,
  payload: street,
});

export const addSelectedStreet = (street) => ({
  type: ADD_SELECTED_STREET,
  payload: street,
});

export const removeSelectedStreet = (street) => ({
  type: REMOVE_SELECTED_STREET,
  payload: street,
});
