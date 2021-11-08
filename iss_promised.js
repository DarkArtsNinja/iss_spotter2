const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

// iss_promised.js: 

// ...

/* 
 * Makes a request to freegeoip.app using the provided IP address, to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  console.log(ip )
  return request(`https://freegeoip.app/json/${ip}`);
};



// const fetchCoordsByIP = function(body) {
//   const ip = JSON.parse(body);
//   return new Promise((resolve, reject) => {
//   //fancy stuff
//   resolve(fancystuff)
//   //reject(error)
//   })
//  };
//  fetchCoordsByIP.then((fancyStuff) => {
// fancystuff2

//  } )

const fetchISSFlyOverTimes = function(body){
  console.log(JSON.parse(body));
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };

