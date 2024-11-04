import express from 'express';
import { addIntern } from '../Controllers/addIntern.js';
import { editIntern } from '../Controllers/editIntern.js';
import { getInternById } from '../Controllers/findIntern.js';

const router=express.Router();

router.route('/addIntern').post(addIntern);
router.route('/editIntern/:internID').post(editIntern);
router.route('/interns/:internID').get(getInternById);


export default router;