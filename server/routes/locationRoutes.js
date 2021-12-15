const express = require("express")
const {getAllLocations,getLocation,deleteLocation,updateLocation,createLocation}  = require("../controllers/locationscontrollers")
const locationRouter = express.Router()

locationRouter.get("/all",getAllLocations)

locationRouter.post("/",createLocation)

locationRouter.get("/one",getLocation)

locationRouter.put("/",updateLocation)

locationRouter.delete("/",deleteLocation)

module.exports = locationRouter