
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));




app.get("/bmicalculator",function(req,res){
  res.sendfile(__dirname+"/index.html");
});


app.post("/bmicalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight/height;
  var bmichar;
  if(bmi<18.5)
    bmichar="Under Weight";
  else if (bmi<24.9)
    bmichar="Normal";
  else if (bmi<29.9)
    bmichar="Over Weight";
  else if (bmi<34.9)
    bmichar="Obesity ( Class I )";
  else if (bmi<39.9)
    bmichar="Obesity ( Class II )";
  else
    bmichar="Extreme Obesity";

  res.send("Your Bmi is " + bmi.toFixed(2) + " which is "+bmichar);
});


app.listen(3000,function(req,res){
  console.log("<h2>The server is running at port 3000</h2>");
});
