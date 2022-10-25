import * as sinon from 'sinon';
import chai from 'chai';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';
import { allCarsMock, carMock, carMockUpdate, carMockUpdateWithId, carMockWithId } from '../../mocks/carMocks';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
const { expect } = chai;

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  beforeEach(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read').resolves(allCarsMock);
  });

  afterEach(()=>{
    sinon.restore();
  })

  describe('Create a new car', () => {
    it('With success', async () => {
      const result = await carService.create(carMock);

      expect(result).to.be.deep.eq(carMockWithId);
    });

    it('With failure - Zod', async () => {
      let error;
      try {
        await carService.create({});
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('Read all cars', () => {
    it('With success', async () => {
      const result = await carService.read();

      expect(result).to.be.deep.eq(allCarsMock);
    });
  });

  describe('Read one car', () => {
    it('With success', async () => {
      sinon.stub(carModel, 'readOne').resolves(carMockWithId);

      const result = await carService.readOne('existing-id');

      expect(result).to.be.deep.eq(carMockWithId);
    });

    it('With failure - Car not found', async () => {
      sinon.stub(carModel, 'readOne').resolves(null);

      let err;
      try {
        await carService.readOne('unexisting-id');
      } catch (error:any) {
        err = error;
      }

      expect(err?.message).to.be.deep.eq(ErrorTypes.EntityNotFound);
    });
  });

  describe('Update a car', () => {
    it('With success', async () => {
      sinon.stub(carModel, 'update').resolves(carMockUpdateWithId);

      const result = await carService.update('valid-id', carMockUpdate);

      expect(result).to.be.deep.eq(carMockUpdateWithId);
    });

    it('With failure - Zod', async () => {
      let err;
      try {
        await carService.update('valid-id', {});
      } catch (error) {
        err = error;
      }

      expect(err).to.be.instanceOf(ZodError);
    });

    it('With failure - Car not found', async () => {
      sinon.stub(carModel, 'update').resolves(null);

      let err;
      try {
        await carService.update('valid-id', carMockUpdate);
      } catch (error:any) {
        err = error;
      }

      expect(err?.message).to.be.deep.eq(ErrorTypes.EntityNotFound);
    });
  });

  describe('Delete a car', () => {
    it('With success', async () => {
      sinon.stub(carModel, 'delete').resolves(carMockWithId);

      const result = await carService.delete('existing-id');

      expect(result).to.be.deep.eq(carMockWithId);
    });

    it('With failure - Car not found', async () => {
      sinon.stub(carModel, 'delete').resolves(null);
      
      let err;
      try {
        await carService.delete('unexisting-id');
      } catch (error:any) {
        err = error;
      }

      expect(err?.message).to.be.deep.eq(ErrorTypes.EntityNotFound);
    });
  });
});