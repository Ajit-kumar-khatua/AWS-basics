const express=require("express")

const app=express()

app.get("/",(req,res)=>{
    res.send("Welcome to Landing Page from server 2!!")
})

app.get("/home",(req,res)=>{
    res.send("Welcome to home page")
})


app.listen(3000,()=>{
    console.log("server is running at 3000")
})