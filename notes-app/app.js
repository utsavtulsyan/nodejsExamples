const yargs = require('yargs');
const notes = require('./notes.js')
yargs.command({
    command: 'add',
    describe: 'add note',
    builder: {
        body: {
            describe: 'body of note',
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'list',
    describe: 'show list of notes',
    handler(argv) {
        notes.listNotes()
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()