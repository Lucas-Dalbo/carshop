import { IService } from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';
import CarModel from '../models/CarModel';

class CarService implements IService<ICar> {
  private _model:IModel<ICar>;

  constructor(model:IModel<ICar> = new CarModel()) {
    this._model = model;
  }

  static async zodValidation(obj: unknown):Promise<ICar> {
    const carParsed = await CarZodSchema.safeParseAsync(obj);
    if (!carParsed.success) throw carParsed.error;
    return carParsed.data as ICar;
  }

  public async create(obj: unknown): Promise<ICar> {
    const validData = await CarService.zodValidation(obj);
    return this._model.create(validData);
  }

  public async read(): Promise<ICar[]> {
    return this._model.read();
  }

  public async readOne(_id: string): Promise<ICar> {
    const car = await this._model.readOne(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async update(_id: string, obj: unknown): Promise<ICar> {
    const validData = await CarService.zodValidation(obj);
    const newCar = await this._model.update(_id, validData);
    if (!newCar) throw new Error(ErrorTypes.EntityNotFound);
    return newCar;
  }

  public async delete(_id: string): Promise<ICar> {
    const carDeleted = await this._model.delete(_id);
    if (!carDeleted) throw new Error(ErrorTypes.EntityNotFound);
    return carDeleted;
  }
}

export default CarService;
