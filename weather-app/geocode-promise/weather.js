const weaGet = (paraM) =>{
    const lan = paraM.lan;
    const lon = paraM.lon;
    const address = paraM.address
    const apiK = "cf2cf3ad8ea249db945132827252102";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiK}&q=${lan},${lon}`;

    return new Promise((resolve, reject) =>{
        fetch(url)
        .then(res =>{
            if(!res.ok){
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(data =>{
            resolve({
                address : address,
                bodyTemC: data.current.temp_c,
                bodyTemF: data.current.temp_f

            });
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
                reject("e");
            }
        })
    
    
    })
}

module.exports = weaGet;