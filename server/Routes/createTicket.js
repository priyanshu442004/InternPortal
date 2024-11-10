import { createSupportTicket } from "../Controllers/saveSupportTicket.js";
import express from 'express'
import { getAllSupportTickets } from "../Controllers/supportTicketController.js";

const router =express.Router();

router.route('/createTicket').post(createSupportTicket);
router.route('/tickets').get(getAllSupportTickets);
export default router;