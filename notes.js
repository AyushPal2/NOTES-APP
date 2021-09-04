const fs = require('fs')
const chalk = require('chalk')
const getNotes = ()=>{
    return 'Your notes.....'
}

 const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes =()=>{
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
       return[] 
    }
}
const addNotes = (title,body) =>{
    const notes = loadNotes()
    const duplicateNotes = notes.find((note)=> note.title === title)
    if(!duplicateNotes){
        notes.push({
         title: title,
         body: body
        })
       saveNotes(notes)
       console.log(chalk.green.inverse("New Note Added"))
    } else{
        console.log(chalk.red.inverse("Note Title Already Taken"))
    }
}
const removeNotes=(title)=>{
    const notes = loadNotes()
    const notesTokeep = notes.filter((note)=> note.title !== title)
    if(notes.length>notesTokeep.length){
        console.log(chalk.green.inverse("Note Removed"))
        saveNotes(notesTokeep)
    }else{
        console.log(chalk.red.inverse("Note Already Removed"))
    }
}

const listNotes = ()=>{
    const notes =loadNotes()
    console.log(chalk.inverse("Your Notes"))
    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const readNotes=(title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>note.title===title)
    if(note){
        console.log(chalk.bold.magenta(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse("No Title found"))
    }
}
module.exports ={
    getnotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}