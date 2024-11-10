import { adminModel } from "../Model/adminModel.js";

export const adminChangePass=async(req,res)=>{
    try {
        
        const {username}=req.params;
        const {currentPassword,newPassword}=req.body;

        const isAdminExist=await adminModel.findOne({username:username});

        if(isAdminExist){
            if(isAdminExist.password!=currentPassword){
                return res.status(400).json({success:false,message:"Incorrect password"})
            }
        }

        const passwordChanged=await adminModel.findOneAndUpdate(
            {username},
            {password:newPassword},
            { new: true }
        );

        if(passwordChanged){
            return res.status(200).json({success:true,message:"Password changed successfully"})
        }
    } catch (error) {
        return res.status(400).json({success:false,message:"Internal server error"})
    }
}