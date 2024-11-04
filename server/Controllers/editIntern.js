import { Intern } from "../model/Intern.js";

// Edit Intern Controller
export const editIntern = async (req, res) => {
  try {
    const { internID } = req.params; 
    const updatedData = req.body; 

    console.log(updatedData)
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
