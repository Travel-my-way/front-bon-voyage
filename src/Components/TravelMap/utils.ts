export const getDepartureAndArrivalCoordinateAverage = (
  departure_point: [number, number],
  arrival_point: [number, number]
): [number, number] => {
  return [(departure_point[0] + arrival_point[0]) / 2, (departure_point[1] + arrival_point[1]) / 2];
};
