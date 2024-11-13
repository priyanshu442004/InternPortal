import express from 'express';
import { addIntern } from '../Controllers/addIntern.js';
import { changePassword, editIntern } from '../Controllers/editIntern.js';
import { getInternById } from '../Controllers/findIntern.js';
import { internLogin } from '../Controllers/internLogin.js';
import { getInternPerformance } from '../Controllers/internPerformance.js';

const router=express.Router();

router.route('/addIntern').post(addIntern);
router.route('/editIntern/:internID').post(editIntern);
router.route('/interns/:internID').get(getInternById);
router.route('/internLogin').post(internLogin);
router.route('/changePassword/:internID').post(changePassword);
router.route('/interns/:internID/performance').get(getInternPerformance);


export default router;