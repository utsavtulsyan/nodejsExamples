const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    debugger
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => title !== note.title)

    if (notes.length === newNotes.length) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        console.log(chalk.green.inverse('Note Removed'))
    }
    saveNotes(newNotes)

}
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.white.inverse('Your Notes'))
    notes.forEach((note) => {
        console.log(note.title)
    });
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.white.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('no note found'))
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}