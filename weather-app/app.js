console.log('Starting weather app');
const geoCode = require('./geocode-callback/geocode');
const weaGet = require('./geocode-callback/weather');
const yargs = require('yargs');
const argvs = yargs.option({a: {demand: true, alias: 'address', describe: 'Address fo rlocation about to search', string: true}}).help().alias('help', 'h').argv;
const address = argvs.address ?? '1600 Amphitheatre Parkway, Mountain View, CA';
const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;
try{
 geoCode(url, (err, data) =>{
  if(err) return console.log(err);
  else{
    console.log(data.address);
    paraM ={
      lan: data.latitude,
      lon: data.longitude
    }
    
    weaGet(paraM, (err, data) =>{
       if(err){
        console.log(`Error found ${err}`);
       }
       else{
        console.log(`The Current Temperature in C is ${data.bodyTemC} while in F is ${data.bodyTemF}`);
       }
    });

  }
  });
}
catch(e){
  console.log("Error : found");
} 