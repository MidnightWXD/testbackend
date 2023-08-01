import express from 'express';
import signupRoute from './api/signup';

const router = express.Router();

router.use('/signup', signupRoute);

export default router;

