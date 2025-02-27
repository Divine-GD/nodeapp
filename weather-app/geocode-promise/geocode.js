 const geoCode = (url) =>{
    return new Promise((resolve, reject)=>{
        fetch(url)
        .then(res =>{
            if(!res.ok){
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(data =>{
            if (!data?.[0]){
                reject('No data found with this location');
            }
            else{
                resolve({ 
                    address: data[0].display_name,
                    latitude: data[0].lat,
                    longitude: data[0].lon
                });
            }
        })
        .catch(e =>{
            if(typeof e.cause === "object" && e.cause){
                if(e.cause.code ==="ENOTFOUND"){
                    reject('Error: page not found');
                  
                }
                else{
                    reject('Error Found :', e.cause.code || e);
                }
            
            }
            else{
                reject('Something went wrong');
            }
        })
    })
 }

 module.exports = geoCode;