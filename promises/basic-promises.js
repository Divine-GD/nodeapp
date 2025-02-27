console.log("staring promises");

const bp = new Promise((resolve, reject) =>{

    resolve('promise success with no error')
    setTimeout(()=>{
        reject('promise request failed');
    }, 2500)
});

bp.then(
    (data)=>{console.log(data)},
    (err) =>{console.log(err)}
)
