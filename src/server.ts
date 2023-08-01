import "dotenv/config"; 
import {
  ClerkExpressRequireAuth,
  LooseAuthProp,
  WithAuthProp,
} from '@clerk/clerk-sdk-node';
import express, { Application, Request, Response } from 'express';
import routes from './routes';

const port = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());

declare global {
  namespace Express {
    interface Request extends LooseAuthProp {}
  }
}

// // Use the lax middleware that returns an empty auth object when unauthenticated
// app.get(
//   '/protected-route',
//   ClerkExpressRequireAuth({
//     // ...options
//   }),
//   (req: WithAuthProp<Request>, res: Response) => {
//     res.json(req.auth);
//   }
// );

app.use('/api', routes);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});