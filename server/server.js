require('dotenv').config()
const express = require("express")
const methodOverride = require("method-override")
const cors = require("cors")
const connectDB = require("./db/config/db")

const app = express()
const PORT = process.env.PORT || 4000

const characterRouter = require('./routes/characterRoutes')
const locationRouter = require('./routes/locationRoutes')
const UserRouter = require('./routes/userRoutes')
const PrivateRouter = require("./routes/private")

connectDB()
app.use(express.json())
app.use(cors())
app.use(methodOverride())

app.use("/characters",characterRouter)

app.use("/locations",locationRouter)

app.use("/users", UserRouter)

app.use("/private",PrivateRouter)

app.use((err,req,res,next)=>{
    if(res.headersSent){
        return next(err)
    }
})


const server = app.listen(PORT,(req,res)=>{
    console.log(`Server up on Port ${PORT}`)
})

process.on("unhandledRejection",(err,promise)=>{
    console.log(`Connection error ${err}`)
    server.close(()=> process.exit(1))
})