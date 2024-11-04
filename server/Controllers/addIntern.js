import { Intern } from "../model/Intern.js";

export const addIntern=async(req,res)=>{

    try {
        console.log(req.body)
        const internData = new Intern(req.body);
        await internData.save();
        res.status(201).json({ message: 'Intern data saved successfully', internData });
      } catch (error) {
        console.error('Error saving intern data:', error);
        res.status(500).json({ message: 'Error saving intern data', error });
      }
}

