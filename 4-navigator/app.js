const addressLat = 10;
const addressLong = 15;
const positionLat = 27;
const positionLong = 20;

const differenceLat = positionLat - addressLat;
const differenceLong = positionLong - addressLong;

const distance = Math.sqrt(differenceLat ** 2 + differenceLong ** 2);

console.log(distance);
