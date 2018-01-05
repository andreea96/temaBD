var express=require('express');
var app=express();

app.post("/admin",function (req,res) {
    console.log(req);
})