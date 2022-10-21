import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import CarService from '../services/CarService';
import { ICar } from '../interfaces/ICar';

class CarController {
  private _service:IService<ICar>;

  constructor(service:IService<ICar> = new CarService()) {
    this._service = service;
  }

  public async create(
    req:Request,
    res:Response<ICar>,
  ) {
    const carData = { ...req.body };
    const result = await this._service.create(carData);
    res.status(201).json(result);
  }
}

export default CarController;
