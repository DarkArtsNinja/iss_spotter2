const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss_promised")

fetchMyIP()

.then(fetchCoordsByIP) //why can't I pass the return value from 'fetchMYIP'??
//abc promise
.then(fetchISSFlyOverTimes)
.then( body => console.log(body))
//

