// const adding = require('./util.js');
// const sum = adding(5,3);
// console.log(sum);

// const n = require('./util.js');
// console.log(n);


// const validator = require('validator');

// const noteFn = require('./notes.js');
// const msg = noteFn();
// // console.log(validator.isEmail('@chat.com'));
// // console.log(validator.isURL('https://m.com'));
// console.log(validator.isURL('.com'));



// const useChalk = require('chalk');
// console.log(useChalk.yellow.inverse('Warning'));
// console.log(useChalk.red.bgBlue('hey world'));
// console.log(useChalk.bold.red.bgYellow.bold('hey world',`this is 
// Anindita`, 'have faith'));
// console.log(useChalk.red.underline('hey world',`this is 
// Anindita`, 'have faith'));
// console.log(useChalk.red.underline('hey world', `this is`, useChalk.blue('Anindita'), 'have faith'));
// console.log(useChalk.red.underline('I\'m a red line' + useChalk.green(` 
// this is green line`)+ 'this becomes red line again' ));
// console.log(useChalk.rgb(123, 45, 67)('Yay for orange colored text!'));



// const chalk = require('chalk');
// const noteFn = require('./notes.js');
// const msg = noteFn();
// const command = process.argv;
// console.log(chalk.green.inverse(msg));
// console.log(process.argv);
// if(command === 'add'){
//     console.log('Adding notes');
// }else if(command === 'remove'){
//     console.log('Removing notes');
// }


const chalk = require('chalk');
const yargs = require('yargs');
const noteFn = require('./notes.js');
const msg = noteFn();

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
            console.log("Notes Title : "+argv.title);
            console.log("Notes Body : "+argv.body);
        }
    }
);

//Create a remove button
yargs.command(
    {
        command: 'remove',
        describe: 'Remove the note',
        handler: function () {
            console.log('Removed the noted!!');
        }
    }
)

//Create a list command
yargs.command(
    {
        command: 'list',
        describe: 'List down all notes',
        handler: function () {
            console.log('Listing down all the notes');
        }
    }
)

//Create a read command
yargs.command(
    {
        command: 'read',
        describe: 'read a note',
        handler: function () {
            console.log('reading a note');
        }
    }
)

//add, remove, read, list

// console.log(yargs.argv);
yargs.parse();