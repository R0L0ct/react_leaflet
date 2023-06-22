export function replaceCoor(
  coordinateState,
  victimCoordinate,
  finalCoordinate
) {
  let index = coordinateState.findIndex((c) => c === victimCoordinate);
  coordinateState[index].lat = finalCoordinate.lat;
  coordinateState[index].lon = finalCoordinate.lon;

  return [...coordinateState];
}
