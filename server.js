const express = require("express")
const app = express()

app.use(express.json())

let users =[]
let idcounter = 1

app.post("/addUser",(req,res)=>{
    let {name,age} = req.body;

    if(!name || name.length < 3){
        return res.status(400).send("name must be atlest 3 char");
    }
    if(!age || age >= 18){
        return res.status(400).send("must be 18+");

    }






    let user = {
        id: idcounter++,
        name: req.body.name,
        age: req.body.age
    }
    users.push(user)
    res.json(user)
})


app.listen(3000,()=>{
    console.log("server is running")
})