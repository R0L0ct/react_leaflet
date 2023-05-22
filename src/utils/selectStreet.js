export const selectStreet = (selectedStreet) => {
  if (selectedStreet !== "") {
    return selectedStreet;
  }
  return "";
};
