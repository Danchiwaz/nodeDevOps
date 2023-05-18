const express = require("express")
const authoController = require("../controllers/authController")

const router = express.Router();

router.post("/signup",authoController.signUp)
router.post("/login", authoController.login)

module.exports = router;