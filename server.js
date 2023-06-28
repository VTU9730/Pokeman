
const express=require("express")
var app=express()
app.listen("3000",()=>{
    console.log("server running at 3000");
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+"/style.css")
})
app.get("/app.js",(req,res)=>{
    res.sendFile(__dirname+"/app.js")
})
 


