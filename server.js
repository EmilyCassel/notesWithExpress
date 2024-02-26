const express = require("express")
const PORT = process.env.PORT || 3000; 
const viewRoutes = require("./routes/viewRoutes")
const apiRoutes = require("./routes/apiRoutes")

const app = express(); 

app.use(express.json());

app.use(express.static("public"));

app.use("/", [viewRoutes, apiRoutes])

app.listen(PORT, () => {
    console.log("listening on PORT", PORT)
});

   
 