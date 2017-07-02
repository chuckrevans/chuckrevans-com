var express     = require('express'),
    app         = express(),
    bodyParser  = require("body-parser");

//node.js body parsing middleware (used for GET requests on the ejs pages)
app.use(bodyParser.urlencoded({extended: true}));
//use custom files (css, js, img)
app.use(express.static(__dirname + '/views'));
//setup for ejs file types
app.set("view engine", "ejs");


//INDEX
app.get("/", function(req, res){
    res.render("landing");
});

//DESTINATIONS
app.get("/destinations", function(req, res){
    res.render("destinations");
});


//server inititiation and confirmation message in terminal
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Chuck's travel portfolio");
});