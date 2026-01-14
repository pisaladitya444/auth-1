const mongoose = require("mongoose")
const leagerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Leager",leagerSchema)
