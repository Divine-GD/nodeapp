const fs = require('fs');
 

console.log('starting app');
const CallBack = (err, data) =>{
    if(err){
        console.log("callback called");
        console.log(err);
    }
}

const fsReadFile = fs.readFile('file/new.txt', CallBack);