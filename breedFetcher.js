const request = require('request');

let fetchBreedDescription = function(breed, cb) {
  const resource = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(resource, (error, response, body) => {
    if (error) {
      cb(error, null);
    }
    let result = JSON.parse(body);
    if(result.length === 0){
      cb('Not a Valid Breed', null);
    } else cb(null, result[0].description);
  });
};


module.exports = { fetchBreedDescription };
