import dbConnect from '../ConnectionDB/connectionDB.js';
import {Intern} from '../Model/internModel.js';

export const Interns = async (req, res) => {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const interns = await Intern.find({});
        res.status(200).json({ success: true, data: interns });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const intern = await Intern.create(req.body);
        res.status(201).json({ success: true, data: intern });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
