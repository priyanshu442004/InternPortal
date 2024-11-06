import { createSupportTicket } from "../Controllers/saveSupportTicket.js";
import express from 'express'

const router =express.Router();

router.route('/createTicket').post(createSupportTicket);

export default router;