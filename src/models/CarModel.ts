import { model as mongooseModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
});

class Car extends MongoModel<ICar> {
  constructor(model = mongooseModel('Car', carSchema)) {
    super(model);
  }
}

export default Car;