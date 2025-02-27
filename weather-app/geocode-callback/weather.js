const weaGet = (paraM, callback)=>{
const apiK = "cf2cf3ad8ea249db945132827252102";
const lan = paraM.lan;
const lon = paraM.lon;
const apiEndpoint = `https://api.weatherapi.com/v1/current.json?key=${apiK}&q=${lan},${lon}`;

fetch(apiEndpoint)
.then( (res) =>{
  if(!res.ok){
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  return res.json();
})

.then(body => {
  
   callback(undefined, {
    bodyTemC: body.current.temp_c,
    bodyTemF: body.current.temp_f
   });
   
})

.catch(err =>{


  if(typeof err.cause === "object" && err.cause && err.cause.errno){
    if(err.cause.errno === "ENOTFOUND"){
        callback("URL error");
    }
    //err = unknownErrNum-
    else{
        callback(`unknownErrNum: ${err.cause.errno}`)
    }
    //err = unstatedErrCause/undefinedErrCause/undefinedErrCauseErrNumber
  }else{
        callback(`unstatedErrCause/undefinedErrCause/undefinedErrCauseErrNumber: ${err}`)
  }


})
}

module.exports=weaGet;