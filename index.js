// index.js
const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

const ip = '198.52.155.2'

// fetchCoordsByIp(ip , (error, data)=> {
//   if(error){
//     console.log(error);
//   } else{
//     console.log(data)
//   }
// })

const coords = { longitude: -79.4973, latitude: 43.7317 }

// fetchISSFlyOverTimes( coords , (error, data)=> {
//   if(error){
//     console.log(error);
//   } else{
//     console.log(data)
//   }
// })

// index.js

// const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});
