import { Intern } from '../Model/internModel.js';
import dbConnect from '../ConnectionDB/connectionDB.js';

export const getInternPerformance = async (req, res) => {
    await dbConnect();
    try {
        const intern = await Intern.findOne({ internID: req.params.internID });
        if (!intern) {
            return res.status(404).json({ success: false, message: 'Intern not found' });
        }
        res.status(200).json({ success: true, performance: intern.performance });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
