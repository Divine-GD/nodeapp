const fs = require('fs');
const os = require('os');
const note = {
    age : 10
};
console.log('starting app');

const UserInfo = os.userInfo();

var word = ` User Name: ${UserInfo.username} and the age is ${note.age}`;

const CallBack = (err, data) =>{
    if(err){
        console.log("callback called with error");
        console.log(err);
    }
    else{
        console.log("callback called successfully");
        console.log(word + ' '+ 'added to file');
    }
} 
 
  fs.appendFile( 'file/1wfile.txt', word, CallBack)
 