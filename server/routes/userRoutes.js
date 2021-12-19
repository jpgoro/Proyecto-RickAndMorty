const express = require("express")
const {getAllUsers,deleteUser,updateUser,register,login}  = require("../controllers/Usercontrollers")
const UserRouter = express.Router()

UserRouter.get("/all",getAllUsers)

UserRouter.post("/register",register)

UserRouter.post("/login",login)

UserRouter.put("/",updateUser)

UserRouter.delete("/",deleteUser)

module.exports = UserRouter