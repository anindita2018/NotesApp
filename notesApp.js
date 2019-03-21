const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customizing yargs
yargs.version('1.0.1');

//Create add command
yargs.command(
    {
        command: 'add',
        describe: 'Add a note',
        builder: {
            title: {
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            },
            body : {
                describe : "Notes Body",
                demandOption : true,
                type : 'string'
            }
        },
        handler: function (argv) {
            // console.log('adding a note!!', argv);
            // console.log("Notes Title : "+argv.title);
            // console.log("Notes Body : "+argv.body);
            notes.addNote(argv.title,argv.body);
        }
    }
);

//Create a remove button
yargs.command(
    {
        command: 'remove',
        describe: 'Remove the note',
        builder :{
            title : {
                describe : 'Note Title',
                demandOption : true,
                type : 'string'
            }
        },
        handler: (argv) => {
            notes.removeNote(argv.title);
            // console.log('Removed the noted!!');
        }
    }
)

//Create a list command
yargs.command(
    {
        command: 'list',
        describe: 'List down all notes',
        handler: function () {
            notes.listNotes();
        }
    }
)

//Create a read command
yargs.command(
    {   
        command: 'read',
        describe: 'read a note',
        builder:{
            title:{
                describe : 'Note Title',
                demandOption : true,
                type : 'string'
            }
        },
        handler: function (argv) {
            notes.readNote(argv.title);
        }
    }
)


// console.log(yargs.argv);
yargs.parse();

