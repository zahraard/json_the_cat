const request = require('request');
const args = process.argv;
const breed = args.slice(2).join(' ');

const resource = `https://api.thecatpi.com/v1/breeds/search?q=${breed}`;
request(resource, (error, response, body) => {
  if (error) {
    console.log(error.message);
    return;
  }
  let result = JSON.parse(body);
  console.log(result[0].description);
});