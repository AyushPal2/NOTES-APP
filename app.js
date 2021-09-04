const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Add Note
yargs.command({
    command: 'add',
    describe: 'Adds a note',
    builder:{
        title:{
            describe:"Notes Title",
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Notes Body',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    },
})

//Remove Note
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder: {
        title:{
            describe:"Notes Title to Remove",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    },
})

//Listing Note
yargs.command({
    command:'list',
    describe: 'Listing Notes',
    handler(){
        notes.listNotes()
    }
})

//Reading note
yargs.command({
    command:'read',
    describe:'Reading all notes',
    builder:{
        title:{
            description:'Note title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(){
        notes.readNotes()
    }
})
yargs.parse()
