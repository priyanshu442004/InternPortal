import dbConnect from '../ConnectionDB/connectionDB.js';
import { Member } from '../Model/memberModel.js';
import { Counter } from '../Model/counter.js';


export const Members = async (req, res) => {
  try {
    await dbConnect();

    switch (req.method) {
      case 'GET':
        try {
          const members = await Member.find({});
          res.status(200).json({ success: true, data: members });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;

      case 'POST':
        console.log("Received data:", req.body);
        try {
          // Find and increment the member counter
          const counter = await Counter.findOneAndUpdate(
            { id: "memberID" },
            { $inc: { seq: 1 } },
            { new: true, upsert: true } // Create if doesn't exist
          );

          // Assign the next member ID
          req.body.memberID = (counter.seq + 100).toString();

          const member = await Member.create(req.body);
          console.log("Member added with ID:", req.body.memberID);
          res.status(201).json({ success: true, data: member });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
          console.log("not added");
        }
        break;

      default:
        res.status(405).json({ success: false, message: "Method Not Allowed" });
        break;
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Database connection failed" });
  }
};
