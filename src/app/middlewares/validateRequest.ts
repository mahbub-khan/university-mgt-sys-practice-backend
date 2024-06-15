import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      //validation
      await schema.parseAsync({
        body: req.body,
      });
      //All ok, now go to the controller
      next();
    } catch (err) {
      //Error caught, go to the global error handler
      next(err);
    }
  };
};

export default validateRequest;
