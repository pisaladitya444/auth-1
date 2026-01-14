const Employe = require("../model/employe")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.getEmploye = async(req,res)=>{
    try {
        const data = await Employe.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}


exports.postEmploye = async(req,res)=>{
    try {
        const employeExist = await Employe.findOne({email:req.body.email})
        if(employeExist) return res.status(500).json({errors:true,message:"employe exist"})
        
        req.body.password = await bcrypt.hash(req.body.password,10)
        
        const data = await Employe.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}


exports.login = async (req,res)=>{
    try {
        const employeExist = await Employe.findOne({email:req.body.email})
        if(!employeExist) return res.status(500).json({error:true,message:"emial or password invalied"})
        const passwordConform = await bcrypt.compare(req.body.password, employeExist.password)
        if(!passwordConform) return res.status(500).json({error:true,message:"emial or password invalied"})
        
        const token = await jwt.sign({id:employeExist._id},process.env.SEC)
        return res.status(500).json({errros:false,data:{token:token,user:employeExist}})

    } catch (error) {
        return res.status(500).json({error:true,message:error.message})
    }
}


exports.putEmploye = async(req,res)=>{
    try {
        const data = await Employe.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}


exports.deleteEmploye = async(req,res)=>{
    try {
        const data = await Employe.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({error:true,message:error.message})
    }
}
