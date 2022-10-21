import express from 'express';
import 'express-async-errors';
import carRoute from './routes/CarRoute';
import errorHandler from './middlewares/error';

const app = express();
app.use(express.json());
app.use('/cars', carRoute);
app.use(errorHandler);

export default app;
