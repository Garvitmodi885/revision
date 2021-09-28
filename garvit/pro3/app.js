var express = require("express");
var app = express();


app.get("/about",(req, res)=>{
    res.sendFile(__dirname+"/about.html")
});
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/contact.html")
});
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html")
})



app.listen(3000,()=>{
    console.log("server running");
})