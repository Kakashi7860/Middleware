const express = require("express")
const app = express()

app.use((req,res,next)=>{
    console.log("method",req.method)
    console.log("url",req.url)
    next()
})


app.get("/",(req,res)=>{
    res.send("home page")

});


app.listen(3000,()=>{
    console.log("server is running")
})