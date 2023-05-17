const express  = require("express");
const {config} = require("dotenv");
const mongoose = require("mongoose")

// initialize the .env 
config();

// connecting to mongoDb 
mongoose.connect("mongodb://Daniel:myPassword@192.168.16.2:27017/?authSource=admin")
.then(() => console.log("Succesfully connected to DB"))
.catch((error) => console.error(error))

// end of connecting the db 


const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`<h2>this works from Daniel Maina</h2>`)
})

app.listen(PORT, () => {
    console.log(`the server is running in port ${PORT}`)
})


// volumes ensures we have persistent data in our containers
// bind-mount in containers - hlp to sync folder in local machine to folder in container
// -v %cd%:/app 
//  -v ${pwd}:/app   
//  -v $(pwd):/app 

// creating a volume override the folder in the container, solution creating an anonymous volume 

// example
// docker run -d -v ${pwd}:/app:ro -v /app/node_modules -p 5000:5000 --name node-app node-app-image 
// execute in interactive mode 
// docker exec -it container-id //bin//sh

// using environmanet variable 
// ===========================================
// docker run -d -v ${pwd}:/app:ro -v /app/node_modules --env PORT=4000 -p 5000:4000 --name node-app node-app-image



// check if the env is set 
// =====================================
// docker exec -it node-app //bin//sh 
// printenv 

// using the .env file 
// docker run -d -v ${pwd}:/app:ro -v /app/node_modules --env-file ./.env -p 5000:5000 --name node-app node-app-image

// remove unneccessary volumes 
// docker volume prune 
// docker rm container_name -fv  == delete the volume associated with that container 

// docker inpsecting the IP Address 
// docker inspect container_name 