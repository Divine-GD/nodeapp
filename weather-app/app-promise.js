console.log('Starting weather app');
const geoCode = require('./geocode-promise/geocode');
const weaGet = require('./geocode-promise/weather');
const yargs = require('yargs');
const argvs = yargs.option({a: {demand: true, alias: 'address', describe: 'Address fo rlocation about to search', string: true}}).help().alias('help', 'h').argv;
const address = argvs.address ?? '1600 Amphitheatre Parkway, Mountain View, CA';
const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;


geoCode(url)
.then(
    (data)=>{
        var paraM = {
            address : data.address,
            lan: data.latitude,
            lon: data.longitude
        }
        console.log("Done getting location...printing data for weather now..")
        return weaGet(paraM);
    }
)
.then((data)=>{console.log(data)}) 
.catch(e =>{
    console.log("Error Found");
})