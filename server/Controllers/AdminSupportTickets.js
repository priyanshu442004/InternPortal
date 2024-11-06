import dbConnect from '../ConnectionDB/connectionDB.js';
import {SupportTicket} from '../Model/supportTicketModel.js';

export const tickets = async (req, res) => {
    await dbConnect();
  
    switch (req.method) {
      case 'GET':
        try {
          const supportTickets = await SupportTicket.find({});
          res.status(200).json({ success: true, data: supportTickets });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;
  
      case 'POST':
        try {
          const supportTickets = await SupportTicket.create(req.body);
          res.status(201).json({ success: true, data: supportTickets });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;
  
      default:
        res.status(400).json({ success: false });
        break;
    }
  };