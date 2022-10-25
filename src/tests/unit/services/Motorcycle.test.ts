import * as sinon from 'sinon';
import chai from 'chai';
import MotorcycleService from '../../../services/MotorcycleService';
import MotorcycleModel from '../../../models/MotorcycleModel';
import { motorcycleMock, motorcycleMockwithId, allMotorsMock } from '../../mocks/motorcycleMocks';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';

const { expect } = chai;

describe('Motorcycle Service', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel);

  beforeEach(async () => {
    sinon.stub(motorcycleModel, 'create').resolves(motorcycleMockwithId);
    sinon.stub(motorcycleModel, 'read').resolves(allMotorsMock);
  });

  afterEach(()=>{
    sinon.restore();
  })

  describe('Create a new motorcycle', () => {
    it('With success', async () => {
      const result = await motorcycleService.create(motorcycleMock);

      expect(result).to.be.deep.eq(motorcycleMockwithId);
    });

    it('With failure - Zod', async () => {
      let error;
      try {
        await motorcycleService.create({});
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('Read all motorcycles', () => {
    it('With success', async () => {
      const result = await motorcycleService.read();

      expect(result).to.be.deep.eq(allMotorsMock);
    });
  });

  describe('Read one motorcycle', () => {
    it('With success', async () => {
      sinon.stub(motorcycleModel, 'readOne').resolves(motorcycleMockwithId);

      const result = await motorcycleService.readOne('existing-id');

      expect(result).to.be.deep.eq(motorcycleMockwithId);
    });

    it('With failure - Motorcycle not found', async () => {
      sinon.stub(motorcycleModel, 'readOne').resolves(null);

      let err;
      try {
        await motorcycleService.readOne('unexisting-id');
      } catch (error:any) {
        err = error;
      }

      expect(err?.message).to.be.deep.eq(ErrorTypes.EntityNotFound);
    });
  });

  describe('Update a motorcycle', () => {
    it('With success', async () => {
      sinon.stub(motorcycleModel, 'update').resolves(motorcycleMockwithId);

      const result = await motorcycleService.update('valid-id', motorcycleMock);

      expect(result).to.be.deep.eq(motorcycleMockwithId);
    });

    it('With failure - Zod', async () => {
      let err;
      try {
        await motorcycleService.update('valid-id', {});
      } catch (error) {
        err = error;
      }

      expect(err).to.be.instanceOf(ZodError);
    });

    it('With failure - Motorcycle not found', async () => {
      sinon.stub(motorcycleModel, 'update').resolves(null);

      let err;
      try {
        await motorcycleService.update('valid-id', motorcycleMock);
      } catch (error:any) {
        err = error;
      }

      expect(err?.message).to.be.deep.eq(ErrorTypes.EntityNotFound);
    });
  });

  describe('Delete a motorcycle', () => {
    it('With success', async () => {
      sinon.stub(motorcycleModel, 'delete').resolves(motorcycleMockwithId);

      const result = await motorcycleService.delete('existing-id');

      expect(result).to.be.deep.eq(motorcycleMockwithId);
    });

    it('With failure - Motorcycle not found', async () => {
      sinon.stub(motorcycleModel, 'delete').resolves(null);
      
      let err;
      try {
        await motorcycleService.delete('unexisting-id');
      } catch (error:any) {
        err = error;
      }

      expect(err?.message).to.be.deep.eq(ErrorTypes.EntityNotFound);
    });
  });
});