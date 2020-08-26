const args = process.argv;
const breed = args.slice(2).join(' ');
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breed,(error, result)=>{
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});