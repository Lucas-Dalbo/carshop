import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, errorsCatalog } from '../errors/catalog';

const errorHandler:ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }

  const messageType = err.message as ErrorTypes;
  const catalogError = errorsCatalog[messageType];

  if (catalogError) {
    const { message, status } = catalogError;
    return res.status(status).json({ message });
  }

  console.log(err);
  return res.status(500).json({ message: 'Internal Error' });
};

export default errorHandler;
