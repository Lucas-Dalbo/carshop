import * as sinon from 'sinon';
import chai from 'chai';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';
import { carMock, carMockWithId } from '../../mocks/carMocks';
import { ZodError } from 'zod';
const { expect } = chai;

describe('Car Serivce', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
  });

  after(()=>{
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
});