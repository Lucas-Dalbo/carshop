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
    const { id } = req.params;
    const result = await this._service.readOne(id);
    res.status(200).json(result);
  }

  public async update(
    req:Request,
    res:Response<ICar>,
  ) {
    const { id } = req.params;
    const obj = { ...req.body };
    const result = await this._service.update(id, obj);
    res.status(200).json(result);
  }

  public async delete(
    req:Request,
    res:Response,
  ) {
    const { id } = req.params;
    await this._service.delete(id);
    res.status(204).end();
  }
}

export default CarController;
