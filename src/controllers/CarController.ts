import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service:IService<ICar>) {}

  public async create(
    req:Request,
    res:Response<ICar>,
  ) {
    const carData = { ...req.body };
    const result = await this._service.create(carData);
    res.status(201).json(result);
  }

  public async read(
    _req:Request,
    res:Response<ICar[]>,
  ) {
    const result = await this._service.read();
    res.status(200).json(result);
  }

  public async readOne(
    req:Request,
    res:Response<ICar>,
  ) {
    const { id } = req.body;
    const result = await this._service.readOne(id);
    res.status(200).json(result);
  }
}

export default CarController;
