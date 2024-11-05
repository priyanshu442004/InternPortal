import { Ticket } from "../Model/supportTicket.js";

export const createSupportTicket = async (req, res) => {
    try {
      const { name, surname, email, subject, message } = req.body;
  
      const newTicket = new Ticket({
        name,
        surname,
        email,
        subject,
        message,
        response: "",     
        resolved: false   
      });
  
      await newTicket.save();
  
      res.status(201).json({ message: "Support ticket submitted successfully." });
    } catch (error) {
      console.error("Error creating support ticket:", error);
      res.status(500).json({ message: "An error occurred while creating the support ticket." });
    }
  };