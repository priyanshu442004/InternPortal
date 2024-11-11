import { Ticket } from "../Model/supportTicket.js";
import { Counter } from "../Model/counter.js";

export const createSupportTicket = async (req, res) => {
    try {
      const { name, surname, email, subject, message, gender } = req.body;
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
        gender,  
        resolved: false   
      });
  
      await newTicket.save();
  
      res.status(201).json({ message: "Support ticket submitted successfully." });
    } catch (error) {
      console.error("Error creating support ticket:", error);
      res.status(500).json({ message: "An error occurred while creating the support ticket." });
    }
  };

  export const setTicketResponse=async(req,res)=>{
    try {
      
      const {ticketID}=req.params;
      const {response}=req.body;

      const updateTicket=await Ticket.findOneAndUpdate(
        {ticketID:ticketID},
        {response:response,
          resolved:true
        },
        {new:true}
      );

      if(!updateTicket){
        return res.status(400).json({success:false,message:"There is some error while updating response"})
      }

      return res.status(200).json({success:true,message:"Ticket resolved successfully"})

    } catch (error) {
      return res.status(400).json({success:false,message:"Internal server error"})
    }
  }