const express = require("express")
const router = express.Router()

//Controller
const {register} = require("../controllers/UserController.js")

//middlewares
const validate = require("../middlewares/handleValidation")
const {userCreateValidation} = require("../middlewares/userValidations")

//Routes
router.post("/register", userCreateValidation(), register)

module.exports = router