import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
import mongoose from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMocks';
import { errorsCatalog } from '../../../errors/catalog';
const { expect } = chai;

describe('Car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(mongoose.Model, 'create').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  });

  describe('Add a new Car', () => {
    it('With succsess', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(true);
      const result = await carModel.create(carMock);
      expect(result).to.be.deep.eq(carMockWithId);
    });
  });
});