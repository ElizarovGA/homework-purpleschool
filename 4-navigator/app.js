const addressLat = 10;
const addressLong = 15;
const positionLat = 27;
const positionLong = 20;

const distance = Number(
  Math.sqrt((positionLat - addressLat) ** 2 + (positionLong - addressLong) ** 2)
);

console.log(distance);
