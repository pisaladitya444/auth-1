const {getLeager,postLeager,putLeager,deleteLeager} = require("../controller/leagerController")
const auth = require("../middelware/auth")

const route = require("express").Router()


route.get("/",getLeager)
route.post("/",auth,postLeager)
route.put("/:id",auth,putLeager)
route.delete("/:id",auth,deleteLeager)

module.exports = route


