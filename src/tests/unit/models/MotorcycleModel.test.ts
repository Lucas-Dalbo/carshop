import * as sinon from 'sinon';
import chai from 'chai';
import MotorcycleModel from '../../../models/MotorcycleModel';
import mongoose from 'mongoose';
import { motorcycleMock, motorcycleMockwithId, allMotorsMock } from '../../mocks/motorcycleMocks';
import { ErrorTypes } from '../../../errors/catalog';

const { expect } = chai;

describe('Motorcycle Model', () => {
  const motorcycleModel = new MotorcycleModel();

  beforeEach(async () => {
    sinon.stub(mongoose.Model, 'create').resolves(motorcycleMockwithId);
    sinon.stub(mongoose.Model, 'find').resolves(allMotorsMock);
    sinon.stub(mongoose.Model, 'findOne').resolves(motorcycleMockwithId);
    sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(motorcycleMockwithId);
    sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(motorcycleMockwithId);
  });

  afterEach(()=>{
    sinon.restore();
  });

  describe('Create a new motorcyle', () => {
    it('With success', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(true);
      
      const result = await motorcycleModel.create(motorcycleMock);

      expect(result).to.be.deep.eq(motorcycleMockwithId);
    });
  });

  describe('Read all motorcycles', () => {
    it('With success', async () => {
      const result = await motorcycleModel.read();

      expect(result).to.be.deep.eq(allMotorsMock);
    });
  });

  describe('Read one motorcycle', () => {
    it('With success', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(true);

      const result = await motorcycleModel.readOne('valid-id');

      expect(result).to.be.deep.eq(motorcycleMockwithId);
    });

    it('With failure - Invalid Id', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(false);

      let err;
      try {
        await motorcycleModel.readOne('invalid-id');
      } catch (error:any) {
        err = error;
      }

      expect(err?.message).to.be.deep.eq(ErrorTypes.InvalidMongoId);
    });
  });

  describe('Update a motorcycle', () => {
    it('With success', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(true);

      const result = await motorcycleModel.update('valid-id', motorcycleMock);

      expect(result).to.be.deep.eq(motorcycleMockwithId);
    });

    it('With failure - Invalid Id', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(false);

      let err;
      try {
        await motorcycleModel.update('invalid-id', motorcycleMock);
      } catch (error:any) {
        err = error;
      }

      expect(err?.message).to.be.deep.eq(ErrorTypes.InvalidMongoId);
    });
  })

  describe('Delete a motorcycle', () => {
    it('With success', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(true);

      const result = await motorcycleModel.delete('valid-id');

      expect(result).to.be.deep.eq(motorcycleMockwithId);
    });

    it('With failure - Invalid Id', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(false);

      let err;
      try {
        await motorcycleModel.delete('invalid-id');
      } catch (error:any) {
        err = error;
      }

      expect(err?.message).to.be.deep.eq(ErrorTypes.InvalidMongoId);
    });
  });
});