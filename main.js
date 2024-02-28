require('dotenv').config()
 
 const express = require("express")
 const app = express()
 const port = 3000;

 app.get("/",(req, res)=>{
    res.send("Hello world")
 })
 app.get("/twitter",(req,res)=>{
   res.send("Twitter is responding")
 })
 app.get("/youtube",(req,res)=>{
    res.send("Please subscribe to my youtube channel")
 })
 app.listen(process.env.PORT, ()=>{
    console.log(`Example of the port is ${port}`);
 })
