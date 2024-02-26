const router = require("express").Router()
const express = require("express")
const fs = require("fs")
const { v4 } = require('uuid');
 


if(!fs.existsSync("db.json")){
    fs.writeFile("db.json", JSON.stringify([]), function(error){
        if(error){
            return console.log(error)
        }
    })
}

router.get("/api/notes", (req, res) => {
    let notes = fs.readFileSync("db.json")
    res.send(notes)
});

router.post("/api/notes", express.json(), (req, res) => {
    const notes = JSON.parse(fs.readFileSync("db.json"));
    let postNote = req.body 
    postNote.id = v4()

    notes.push(postNote)
    fs.writeFile("db.json", JSON.stringify(notes), (err) => {
        if(err) {
            return console.log(err)
        }
        res.send(postNote)
    })
}); 

router.delete("/api/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("db.json"));
    let filterNotes = notes.filter(note => note.id !== req.params.id)

    fs.writeFile("db.json", JSON.stringify(filterNotes), (err) => {
        if(err) {
            return console.log(err)
        }
        res.send(notes)
    })
}); 

module.exports = router
