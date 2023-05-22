export const addSelectedStreets = (streets, selectedStreet) => {
  if (selectedStreet === "") {
    return [...streets];
  }
  if (streets.some((street) => street === selectedStreet)) {
    return [...streets];
  }
  return [...streets, selectedStreet];
};
