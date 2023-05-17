const express = require("express")

const postController = require("../controllers/postController");

const router = express.Router();

// chain the get and create 
router.route("/").get(postController.getAllPosts).post(postController.createPost)
// chain update ad=nd delete 
router.route("/:id").put(postController.updateSinglePost).delete(postController.deleteSinglePost)