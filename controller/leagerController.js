const Leager = require("../model/leager")

exports.getLeager = async (req,res)=>{
    try {
        const data = await Leager.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
} 


exports.postLeager = async (req,res)=>{
    try {
        const data = await Leager.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putLeager = async (req,res)=>{
    try {
        const data = await Leager.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteLeager = async (req,res)=>{
    try {
        const data = await Leager.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
