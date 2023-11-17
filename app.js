const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/bmiCalculator.html");
}); 

app.post("/", function(req, res) {
    var h = Number(req.body.height);
    var w = Number(req.body.weight);
    var result = w / (h*h);
    res.send("Your BMI is: " + Math.round(result));
});
 
app.listen("3000", function() {
    console.log("Server started at port 3000");
});