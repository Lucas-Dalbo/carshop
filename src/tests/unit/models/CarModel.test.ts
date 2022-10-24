import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
import mongoose from 'mongoose';
import { allCarsMock, carMock, carMockWithId } from '../../mocks/carMocks';
const { expect } = chai;

describe('Car Model', () => {
  const carModel = new CarModel();

  beforeEach(async () => {
    sinon.stub(mongoose.Model, 'create').resolves(carMockWithId);
    sinon.stub(mongoose.Model, 'find').resolves(allCarsMock);
    sinon.stub(mongoose.Model, 'findOne').resolves(carMockWithId);
  });

  afterEach(()=>{
    sinon.restore();
  });

  describe('Create a new Car', () => {
    it('With success', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(true);
      const result = await carModel.create(carMock);
      expect(result).to.be.deep.eq(carMockWithId);
    });
  });

  describe('Read all Cars', () => {
    it('With success', async () => {
      const result = await carModel.read();
      expect(result).to.be.deep.eq(allCarsMock);
    });
  });

  describe('Read one Car', () => {
    it('With success', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(true);
      const result = await carModel.readOne('valid-id');
      expect(result).to.be.deep.eq(carMockWithId);
    });

    it('With failure - Invalid Id', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let err;
      try {
        await carModel.readOne('invalid-id');
      } catch (error) {
        err = error;
      }
      expect(err).to.be.instanceOf(Error);
    });
  });
});