/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');



 const fetchMyIP = function(callback) { 
  // use request to fetch IP address from JSON API

  request('https://api.ipify.org?format=json', (error, response, body)=>{
    if(error && response.statusCode !== '200'){
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } 
    else {
      callback(null, JSON.parse(body) );
    }
  })

}

const fetchCoordsByIp = function(ip, callback) {
    // own IP address
const apiKey = '6c4732a0-3f40-11ec-867f-cbd1d0b4db27';
  request(`https://api.freegeoip.app/json/${ip}?apikey=${apiKey}`, (error, response, body)=>{
    if(error && response.statusCode !== '200'){
      const msg = `Status Code ${response.statusCode} when fetching Latitude & Longitude. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } 
    else {

      const {longitude, latitude} = JSON.parse(body)
      const gps = {longitude, latitude}
      callback(null, gps );
    }
  })
}

const fetchISSFlyOverTimes = function(coords, callback){
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body)=>{
    if(error && response.statusCode !== '200'){
      const msg = `Status Code ${response.statusCode} when fetching Latitude & Longitude. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } 
    else {

      const {response} = JSON.parse(body)
      callback(null, response );
    }

});
}

// iss.js 

/**
 * Orchestrates multiple API requests in order to determine the next 5 upcoming ISS fly overs for the user's current location.
 * Input:
 *   - A callback with an error or results. 
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly-over times as an array (null if error):
 *     [ { risetime: <number>, duration: <number> }, ... ]
 */ 
 const nextISSTimesForMyLocation = function(callback) {
  // empty for now
  fetchMyIP(callback);

}


module.exports = { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes, nextISSTimesForMyLocation };
