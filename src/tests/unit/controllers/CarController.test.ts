import * as sinon from 'sinon';
import chai from 'chai';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { allCarsMock, carMock, carMockWithId } from '../../mocks/carMocks';
import { Request, Response } from 'express';
const { expect } = chai;

describe('Car controller', () => {
  const carService = new CarService();
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(async () => {
    sinon.stub(carService, 'create').resolves(carMockWithId);
    sinon.stub(carService, 'read').resolves(allCarsMock);
    sinon.stub(carService, 'readOne').resolves(carMockWithId);


    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(()=>{
    sinon.restore();
  })

  describe('Create a new car', () => {
    it('With success', async () => {
      req.body = carMock;
      await carController.create(req, res);
      const status = res.status as sinon.SinonStub;
      const json = res.json as sinon.SinonStub;

      expect(status.calledWith(201)).to.be.true;
      expect(json.calledWith(carMockWithId)).to.be.true;
    });
  });

  describe('Read all cars', () => {
    it('With success', async () => {
      await carController.read(req, res);
      const status = res.status as sinon.SinonStub;
      const json = res.json as sinon.SinonStub;

      expect(status.calledWith(200)).to.be.true;
      expect(json.calledWith(allCarsMock)).to.be.true;
    });
  });

  describe('Read one car', () => {
    it('With success', async () => {
      await carController.readOne(req, res);
      const status = res.status as sinon.SinonStub;
      const json = res.json as sinon.SinonStub;

      expect(status.calledWith(200)).to.be.true;
      expect(json.calledWith(carMockWithId)).to.be.true;
    });
  });
});