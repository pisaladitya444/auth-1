const {getEmploye,deleteEmploye,postEmploye,putEmploye, login} = require("../controller/employeController")

const route = require("express").Router()

route.get("/",getEmploye)
route.post("/",postEmploye)
route.put("/:id",putEmploye)
route.delete("/:id",deleteEmploye)
route.post("/login",login)


module.exports = route
