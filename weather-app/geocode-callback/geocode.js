const geoCode = (url, callback) =>{
    
fetch(url)
  .then(res => {
    if (!res.ok) {  
      callback(`HTTP error! Status: ${res.status}`);
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
   })
  .then(
    (data) => {
      if (!data?.[0]){
          callback('Location not found');
        }
        else{
          callback(undefined, {
            address: data[0].display_name,
            latitude: data[0].lat,
            longitude: data[0].lon
          })
        }
    }
)
.catch((err) => {
  if(typeof err.cause === "object" && err.cause){
    if(err.cause.code ==="ENOTFOUND"){
      callback('Error: page not found');
      
    }
    else{
      callback('Error Found :', err.cause.code || err);
    }

  }
  else{
    callback('Something went wrong');
  }
}
);
}

module.exports = geoCode;