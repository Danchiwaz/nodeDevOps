const express = require("express");
const { config } = require("dotenv");
const mongoose = require("mongoose");
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");

// initialize the .env
config();

// creating the routes
const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/authRoutes");

// connecting to mongoDb

// hack for db retries
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
const connectWitRetries = () => {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Succesfully connected to DB"))
    .catch((error) => {
      console.error(error);
      setTimeout(connectWitRetries, 5000);
    });
};
connectWitRetries();
// end of connecting the db

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// route configuration
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);
// end of route configuration

app.listen(PORT, () => {
  console.log(`the server is running in port ${PORT}`);
});

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

// check the networks
// docker network ls
// docker network inspect network name
