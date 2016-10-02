const express = require('express');
const path = require('path');

const app =  express();

app.use(express.static(path.join(__dirname, "./dist")))
app.get("/", function(req, res, next){
    res.sendFile(path.join(__dirname, "./src/index.html"))
})

app.listen(5555, "localhost", function(err){
    console.log("Server started at http://localhost:5555 !")
});