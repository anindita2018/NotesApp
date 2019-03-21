const fs = require('fs');
const chalk = require('chalk');

//adding a note
const addNote = (title, body) => {
    const notes = loadNotes();
    // console.log(notes);

    //the below code will go through all the items of the array irrespective of what the length of the array be.
    // But our goal is to add a note only if we find a one match of duplicate array. So we will use find() method instead of filter()
    
    const duplicateNotes = notes.find((note) => {
        return note.title === title;
    });

    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // });

    //we can also write the if condition as if(duplicateNote === undefined) because, find() will return undefined if it does not find any match.
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("New note added");
    } else {
        console.log("Note title taken");
    }
}

const saveNotes = (notes) =>  {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch (e) {
        return [];
    };

}


//reading a note
const readNote = (title) => {
    const notes = loadNotes();
    const readNotes = notes.find((note)=>note.title===title);
        if(readNotes)
        {   console.log(chalk.underline.green(readNotes.title));
            console.log(readNotes.body);
        }else
            console.log(chalk.red.inverse("Item not found :"));
    }



//removing a note
const removeNote = function (title){
    // console.log(title);
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note){
        return note.title !== title;
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed'));
    }else {
        console.log(chalk.red.inverse('Note not found'));
    }

    saveNotes(notesToKeep);
}


//listing notes
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.yellow.inverse('Your List'))  
    notes.forEach(note => {
        console.log(note.title);
    });
}

module.exports = {
    addNote: addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}