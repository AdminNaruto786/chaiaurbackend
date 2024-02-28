require('dotenv').config()
 
 const express = require("express")
 const app = express()
 const port = 4000;
 app.get("/",(req, res)=>{
    res.send("Hello world")
 })
 app.get("/youtube",(req,res)=>{
    res.send("Please subscribe to my youtube channel")
 })
 app.listen(process.env.PORT, ()=>{
    console.log(`Example of the port is ${port}`);
 })
