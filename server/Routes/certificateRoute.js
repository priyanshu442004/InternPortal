import express from "express";
import { certificateValidation } from "../Controllers/certificateValidation.js";

const router =express.Router();

router.route('/validateCertificate').post(certificateValidation);

export default router;