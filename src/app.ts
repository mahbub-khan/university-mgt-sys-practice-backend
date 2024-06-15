import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFoundHandler from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//all module routes
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  
  res.send({
    message: "Hi, Welcome to the backend"
  });
};

//test route
app.get('/', test);

//Global error handler
app.use(globalErrorHandler)

//Not found handler
app.use(notFoundHandler)

export default app;
