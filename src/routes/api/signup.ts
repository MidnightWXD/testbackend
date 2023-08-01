import express, { Request, Response } from 'express';
import {
    ClerkExpressRequireAuth,
    LooseAuthProp,
    WithAuthProp,
  } from '@clerk/clerk-sdk-node';

const router = express.Router();

router.post('/',
    ClerkExpressRequireAuth({
        // ...options
    }),
    (req: WithAuthProp<Request>, res: Response) => {

    const { username, password } = req.body;

    // Implement your signup logic here

    res.status(200).send('Signup successful');
});

export default router;
