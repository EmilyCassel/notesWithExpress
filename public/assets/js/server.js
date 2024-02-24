const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express(); 
const Port = process.env.PORT || 3000; 

app.use(express.json());

app.get("/api/notes", (req, res) => {});

app.port("/api/notes", (req, res) => {}); 

app.delete("/api/notes/:id", (req, res) => {}); 

app.use(express.static("public"));

app.get("*", (req, res) => {});

app.listen(PORT, () => {});