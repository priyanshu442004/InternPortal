import { adminModel } from "../Model/adminModel.js";

export const adminLogin = async (req, res) => {
    const { username, password } = req.body;

    
    if (!username || !password) {
        return res.status(400).json({ message: "Please enter admin credentials", success: false });
    }

    
    const adminExist = await adminModel.findOne({ username });
    if (!adminExist) {
        return res.status(400).json({ message: "Enter correct details", success: false });
    }

    if (password !== adminExist.password) {
        return res.status(400).json({ message: "Incorrect password", success: false });
    }
      
    return res.status(200).json({ success: true, message: "Admin login success" });
};
