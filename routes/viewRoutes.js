const router = require("express").Router()
const path = require("path")

router.get("/notes", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public/notes.html"))
})

module.exports = router