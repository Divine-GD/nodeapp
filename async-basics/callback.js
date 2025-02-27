console.log("starting callback");


const Callback = (msg) =>{
    console.log('setTimeout for' +' '+ msg);
};

setTimeout(Callback, 2000, "First MSG" , "hello");
setTimeout(Callback, 0, "Second MSG  " , "hello");

setTimeout(()=>{
    console.log('second timeout of callback');
}, 0)

 const fetchData = (callback) => {
    var data = "Hello, World!";
    callback(data); 
 };
 
 fetchData((message) => {
     console.log(message);  
 });
 
console.log('complete callback');