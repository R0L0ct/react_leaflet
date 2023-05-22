export const SELECT_STREET = "SELECT_STREET";
export const ADD_SELECTED_STREET = "ADD_SELECTED_STREET";
export const REMOVE_SELECTED_STREET = "REMOVE_SELECTED_STREET";
export const ADD_FORM_DATA = "ADD_FORM_DATA";
export const CLEAR_DATA = "CLEAR_DATA";

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

export const addFormData = (data) => ({
  type: ADD_FORM_DATA,
  payload: data,
});

export const clearData = () => ({
  type: CLEAR_DATA,
});
