import { Intern } from "../Model/Intern.js";

// Edit Intern Controller
export const editIntern = async (req, res) => {
  try {
    const { internID } = req.params; 
    const updatedData = req.body; 

    const currentIntern = await Intern.findOne({ internID });

    if (!currentIntern) {
      return res.status(404).json({ message: 'Intern not found' });
    }
    // Append the new performance value if provided
    if (updatedData.performance) {
      updatedData.performance = currentIntern.performance
        ? `${currentIntern.performance},${updatedData.performance}`
        : updatedData.performance;
    }

    const updatedIntern = await Intern.findOneAndUpdate(
      { internID },
      { ...updatedData },
      { new: true, runValidators: true } // Return updated document and run validators
    );

    // Check if intern was found and updated
    if (!updatedIntern) {
      return res.status(404).json({ message: 'Intern not found' });
    }

    res.status(200).json({ message: 'Intern updated successfully', intern: updatedIntern });
  } catch (error) {
    console.error('Error updating intern:', error);
    res.status(500).json({ message: 'Failed to update intern. Please try again.' });
  }
};

export const changePassword=async(req,res)=>{
  try {
    const {internID}=req.params;
    const {currentPassword,newPassword}=req.body;
    
    const isInternExist=await Intern.findOne({internID:internID});
    
    if(isInternExist){
      if(isInternExist.password==currentPassword){
        
          const updatedPassword=await Intern.findOneAndUpdate(
            {internID:internID},
            {password:newPassword},
            {new:true}
          );

          if(updatedPassword){
            return res.status(200).json({success:true,message:"Password changed successfully"})
          }else{
            return res.status(400).json({success:false,message:"Please try again"})
          }
      }else{
        return res.status(400).json({success:false,message:"your current password is incorrect"})
      }
    }
    
  } catch (error) {
    return res.status(400).json({success:false,message:"Internal error"})
  }
}
