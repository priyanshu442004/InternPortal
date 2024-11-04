import { Intern } from "../model/Intern.js";

export const getInternById = async (req, res) => {
  const { internID } = req.params; 
  
  try {
    
    const intern = await Intern.findOne({ internID: internID });
    if (!intern) {
      return res.status(404).json({ message: 'Intern not found' });
    }
    res.status(200).json(intern); 
  } catch (error) {
    console.error('Error fetching intern:', error);
    res.status(500).json({ message: 'Internal server error' }); 
  }
};
