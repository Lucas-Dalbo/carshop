import { Router } from 'express';
import CarController from '../controllers/CarController';

const controller = new CarController();

const carRoute = Router();
carRoute.post('/', (req, res) => controller.create(req, res));

export default carRoute;
