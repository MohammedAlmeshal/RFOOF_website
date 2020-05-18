var express = require("express");
var app     = express();

app.set("view engine" , "ejs")
app.use(express.static(__dirname + "/public"));


app.get("/" , (req,res) =>{
    res.render("home");
})



const port = process.env.PORT || 5000;

app.listen(port , () => console.log("Sever started on port " + port));