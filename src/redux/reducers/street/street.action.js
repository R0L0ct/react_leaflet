export const SELECT_STREET = "SELECT_STREET";
export const ADD_SELECTED_STREET = "ADD_SELECTED_STREET";
export const REMOVE_SELECTED_STREET = "REMOVE_SELECTED_STREET";
export const ADD_FORM_DATA = "ADD_FORM_DATA";
export const CLEAR_DATA = "CLEAR_DATA";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const ADD_COORDENADAS = "ADD_COORDENADAS";
export const REMOVE_COOR = "REMOVE_COOR";
export const POLIGON_DATA = "POLIGON_DATA";

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

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const addCoordenadas = (coordenadas) => ({
  type: ADD_COORDENADAS,
  payload: coordenadas,
});

export const removeSelectedCoor = (coor) => ({
  type: REMOVE_COOR,
  payload: coor,
});

export const poligonData = (data) => ({
  type: POLIGON_DATA,
  payload: data,
});
