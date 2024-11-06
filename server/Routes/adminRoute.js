import express from 'express';
import { adminLogin } from '../Controllers/adminLogin.js';
import { Interns } from '../Controllers/AdminInternList.js';
import {tickets} from '../Controllers/AdminSupportTickets.js'

const router = express.Router();

router.route('/adminLogin').post(adminLogin);
router.route('/internList').get(Interns);
router.route('/supporttickets').get(tickets);

export default router;
