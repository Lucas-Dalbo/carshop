import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarService from '../services/CarService';

const controller = new CarController(new CarService());

const carRoute = Router();
carRoute.post('/', (req, res) => controller.create(req, res));

export default carRoute;
