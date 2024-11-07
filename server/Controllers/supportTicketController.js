import { Ticket } from "../Model/supportTicket.js";

// Controller to get all support tickets
export const getAllSupportTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find(); // Retrieve all tickets
    res.status(200).json({ success: true, tickets });
  } catch (error) {
    console.error("Error fetching tickets:", error);
    res.status(500).json({ success: false, message: "Failed to fetch tickets" });
  }
};
