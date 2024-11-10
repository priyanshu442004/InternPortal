import dbConnect from '../ConnectionDB/connectionDB.js';
import { Member } from '../Model/memberModel.js';
import { adminModel } from "../Model/adminModel.js";

export const deleteMembers = async (req, res) => {
  try {
    await dbConnect();

    const { username, password, memberIds } = req.body;

    // Validate request body
    if (!username || !password || !memberIds || !Array.isArray(memberIds) || memberIds.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid request" });
    }

    // Verify admin credentials
    const admin = await adminModel.findOne({ username });
    if (!admin || admin.password !== password) {
      return res.status(403).json({ success: false, message: "Unauthorized: Invalid credentials" });
    }

    // Delete members
    const deleteResult = await Member.deleteMany({ memberID: { $in: memberIds } });

    if (deleteResult.deletedCount > 0) {
      res.status(200).json({ 
        success: true, 
        message: `${deleteResult.deletedCount} members deleted successfully.` 
      });
    } else {
      res.status(404).json({ 
        success: false, 
        message: "No members found with the provided IDs" 
      });
    }
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Failed to delete members",
      error: error.message 
    });
  }
};
