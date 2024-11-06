import { Ticket } from "../Model/supportTicket.js";
import { Counter } from "../Model/counter.js";

export const createSupportTicket = async (req, res) => {
    try {
      const { name, surname, email, subject, message } = req.body;

      const counter = await Counter.findOneAndUpdate(
        { id: "ticketID" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true } // Create if doesn't exist
      );
  
      const newTicket = new Ticket({
        ticketID: counter.seq.toString().padStart(3, "0"),
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