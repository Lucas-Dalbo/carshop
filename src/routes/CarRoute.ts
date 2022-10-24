import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarService from '../services/CarService';

const controller = new CarController(new CarService());

const carRoute = Router();
carRoute.post('/', (req, res) => controller.create(req, res));
carRoute.get('/', (req, res) => controller.read(req, res));
carRoute.get('/:id', (req, res) => controller.readOne(req, res));
carRoute.put('/:id', (req, res) => controller.update(req, res));
carRoute.delete('/:id', (req, res) => controller.delete(req, res));

export default carRoute;
