console.log('starting callback');

var getUser = (id, callback) =>{
   var user = {
    id ,
    name : 'hello'
   }
   setTimeout(()=>{
    callback(user);
   }, 2000)
}

getUser(112, (user)=>{
   console.log(user);
})