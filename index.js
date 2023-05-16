const express  = require("express");
const {config} = require("dotenv");

// initialize the .env 
config();


const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`<h2>this works shenanigans dfsdfbhgug</h2>`)
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