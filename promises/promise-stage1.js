var asyncAdd = (a, b) =>{
    return new Promise((resolve, reject)=>{
        if (typeof a === 'number' && typeof b === 'number'){
            setTimeout(()=>{
                var ab = a + b ;
                resolve(`Data Added: ${ab}`);
            }, 2500)
        }
        else{
            reject('Only Number type data allowed here');
        }
    });
}

asyncAdd(5, 7).then(
    (data)=>{console.log(data)},
    (err) =>{console.log(err)}
)

// var data = asyncAdd(1, 9).then((ueedj) =>{
//     return ueedj;
// });

// console.log(data);