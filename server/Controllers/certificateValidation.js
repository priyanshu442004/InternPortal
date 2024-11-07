import {certificate} from '../Model/certificateModel.js'

export const certificateValidation=async(req,res)=>{
    try {
        const {id}=req.body;
        const isValid=await certificate.findOne({id})
        if(!isValid){
            return res.status(400).json({message:"This certificate is invalid",success:false})
        }
        return res.status(200).json({message:"Certificate is valid",success:true})
    } catch (error) {
        console.log(erro)
        res.status(400).json({message:"Internal error",success:false})
    }
}