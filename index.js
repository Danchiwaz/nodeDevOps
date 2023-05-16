const express  = require("express");
const {config} = require("dotenv");

// initialize the .env 
config();


const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`<h2>checking if the infrastructure is valid</h2>`)
})

app.listen(port, () => {
    console.log(`the server is running in port ${port}`)
})


// volumes ensures we have persistent data in our containers
// bind-mount in containers - hlp to sync folder in local machine to folder in container
// -v %cd%:/app 
//  -v ${pwd}:/app   
//  -v $(pwd):/app 

// creating a volume override the folder in the container, solution creating an anonymous volume 

// example
// docker run -d -v ${pwd}:/app -v /app/node_modules -p 5000:5000 --name node-app node-app-image 