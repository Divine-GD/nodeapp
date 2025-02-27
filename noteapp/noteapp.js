console.log('starting node app');
const fs = require('fs');
const fileName = 'file/note.json';



   const allNotesFunc = (callback) =>{
    try{
        fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) { console.log(err); return;  }
        if(data.length > 2){
            allNotes = JSON.parse(data);
        }
        else{
            allNotes = [];
        }
        
        callback(allNotes);
     });
    }catch(e){
        if(e){
           console.log(e);
        }
    }
   

   };


const AddFunc = (title, body) =>{
   if(!title || !body){console.log('empty parameters');return};
   var allNotes = [];
   const newNoteObj = {title : title, body : body};
    allNotesFunc((allNotes) => {
        const duplicateTitle = allNotes.filter((note) => {
            return note.title === title;
        });

    if(duplicateTitle.length === 0){
          allNotes.push(newNoteObj);
          var newNoteString = JSON.stringify(allNotes);
          fs.writeFile(fileName, newNoteString, (err) => {
          if(err){console.log(err);return};
          });
          console.log(`Added Title: ${title} Body: ${body}`);
        
    }else{
     console.log(`Title : ${title} already exists in note book`);
    } 
   });
};



const ReadFunc = (title) =>{
    if(!title){console.log('empty parameters');return};
    allNotesFunc((allNotes) => {
        const duplicateTitle = allNotes.filter((note) => {
            return note.title === title;
        });
    if(duplicateTitle.length === 1){
        console.log(`Reading note: ${title}`);
        console.log(duplicateTitle);        
    }else{
        console.log(`Note with this title does not exit: ${title}`);
    } 
   });
};


const ListFunc = (callback) => {
  allNotesFunc(callback)
};

 



const RemoveFunc = (title) =>{
    if(!title){console.log('empty parameters');return};
    allNotesFunc((allNotes) => {
        const duplicateTitle = allNotes.filter((note) => {
            return note.title !== title;
        });
        if(duplicateTitle.length === 0){  
            var newNoteString = JSON.stringify(duplicateTitle);
            fs.writeFile(fileName, newNoteString, (err) => {
            if(err){console.log(err);return};
            });
            console.log(`Removed Title: ${title}`);
    
        }else{
            console.log(duplicateTitle);
            console.log(`Note with this title does not exit: ${title}`);
        } 
   });
};

module.exports = {
    AddFunc,
    ReadFunc,
    ListFunc,
    RemoveFunc
}

