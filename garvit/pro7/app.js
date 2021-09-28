
var express =require("express");


var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res )=>{
    res.render("home")
});
app.get("/about", (req, res)=>{
    res.render("about")
});
app.get("/contact", (req, res)=>{
    res.render("contact")
});


var port = 3000;
app.listen(port, ()=>{
    console.log("Server running")
})