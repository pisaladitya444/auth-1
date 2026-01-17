const express = require("express")
const mongoose = require("mongoose")
const cros = require("cors")
const employeRoute = require("./routes/employeRoute")
const leagerRoutes = require("./routes/leagerRoutes")
require("dotenv/config")


const app = express()

app.use(express.json())
app.use(cros())

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/employe",employeRoute)
app.use("/api/leager",leagerRoutes)

app.listen(process.env.PORT ||5000,()=>{
    console.log("listening on port");
})

async function dB() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
dB()