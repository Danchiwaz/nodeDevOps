const express  = require("express");
const {config} = require("dotenv");

// initialize the .env 
config();


const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h2>Hi Daniel</h2>")
})

app.listen(port, () => {
    console.log(`the server is running in port ${port}`)
})