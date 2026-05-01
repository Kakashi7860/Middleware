const express = require("express")
const app = express()

app.use(express.json())

let users = []
let idcounter = 1

app.post("/addUser", (req, res) => {
    let { name, age, contact } = req.body;


    if (!name || name.length < 3) {
        return res.status(400).send("Name must be at least 3 characters");
    }

    if (!age || age < 18) {
        return res.status(400).send("User must be 18+");
    }


    if (!contact || contact.length !== 10) {
        return res.status(400).send("Contact must be 10 digits");
    }

    for (let i = 0; i < contact.length; i++) {
        if (contact[i] < '0' || contact[i] > '9') {
            return res.status(400).send("Contact must contain only numbers");
        }
    }

    let user = {
        id: idcounter++,
        name,
        age,
        contact
    }

    users.push(user)
    res.json(user)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})