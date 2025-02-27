const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const note = require('./noteapp');
console.log('starting app');
 
const action = yargs.argv;
const process =  action._[0];
const title = action.title ?? 'UNDEFINED';
const body = action.body;

const addNote =  note.AddFunc;
const readNote =  note.ReadFunc;
const listNote =  note.ListFunc;
const removeNote =  note.RemoveFunc;

if(process ===  'add' && title && body){
    addNote(title, body);
}

else if (process ===  'read' && title){
    readNote(title);
}

else if (process ===  'list'){
    listNote((allNotesObj) => {
        console.log(allNotesObj);
    });
  
}

else if (process ===  'remove' && title){
    removeNote(title);
}

else{
   console.log(`This Action Is Not Known ${title}`);
}
