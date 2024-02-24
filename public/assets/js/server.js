const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express(); 
const Port = process.env.PORT || 3000; 

app.use(express.json());

app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "db.json"), "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({error: "Computer Error"})
        }
    })
});

app.port("/api/notes", (req, res) => {
    const {title, text} = req.body
    if(!title || !test) {
        return res.status(404).json({error: "Must have text and title"})
    } 
    fs.readFile(path.join(__dirname, "db,json"), "utf8", (err, data) => {
        if (err){
            return res.status(404).json({error: "Computer error"})
        }
    const notes = JSON.parse(data); 
    const newNote = {
            id: 
            title, 
            text, 
        }
    notes.push(newNote); 
    fs.writeFile(path.join(__dirname, "db.json"), JSON.stringify(notes), (err) => {
        if(err) {
            return res.status(404).json({error: "Computer error"})
        }
        res.status().json(newNote);
    })
    })
}); 

app.delete("/api/notes/:id", (req, res) => {}); 

app.use(express.static("public"));

app.get("*", (req, res) => {});

app.listen(PORT, () => {});