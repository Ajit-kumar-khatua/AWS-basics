const express=require("express")

const app=express()

app.get("/",(req,res)=>{
    res.send("Welcome to Landing Page from server 1")
})

app.get("/home",(req,res)=>{
    res.send("Welcome to home page")
})


app.listen(3000,()=>{
    console.log("server is running at 3000")
})