import * as sinon from 'sinon';
import chai from 'chai';
import MotorcycleService from '../../../services/MotorcycleService';
import MotorcycleController from '../../../controllers/MotorcycleController';
import { Request, Response } from 'express';
import { allMotorsMock, motorcycleMock, motorcycleMockwithId } from '../../mocks/motorcycleMocks';

const { expect } = chai;

describe('Motorcycle controller', () => {
  const service = new MotorcycleService();
  const controller = new MotorcycleController(service);

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    sinon.stub(service, 'create').resolves(motorcycleMockwithId);
    sinon.stub(service, 'read').resolves(allMotorsMock);
    sinon.stub(service, 'readOne').resolves(motorcycleMockwithId);
    sinon.stub(service, 'update').resolves(motorcycleMockwithId);
    sinon.stub(service, 'delete').resolves();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Create a new motorcycle', () => {
    it('With success', async () => {
      req.body = motorcycleMock;
      await controller.create(req, res);
      const status = res.status as sinon.SinonStub;
      const json = res.json as sinon.SinonStub;

      expect(status.calledWith(201)).to.be.true;
      expect(json.calledWith(motorcycleMockwithId)).to.be.true;
    });
  });

  describe('Read all motorcycles', () => {
    it('With success', async () => {
      await controller.read(req, res);
      const status = res.status as sinon.SinonStub;
      const json = res.json as sinon.SinonStub;

      expect(status.calledWith(200)).to.be.true;
      expect(json.calledWith(allMotorsMock)).to.be.true;
    });
  });

  describe('Read one motorcycle', () => {
    it('With success', async () => {
      req.params = { id: 'valid' };
      await controller.readOne(req, res);
      const status = res.status as sinon.SinonStub;
      const json = res.json as sinon.SinonStub;

      expect(status.calledWith(200)).to.be.true;
      expect(json.calledWith(motorcycleMockwithId)).to.be.true;
    });
  });

  describe('Update a motrocycle', () => {
    it('With success', async () => {
      req.params = { id: 'valid' };
      req.body = motorcycleMock;
      await controller.update(req, res);
      
      const status = res.status as sinon.SinonStub;
      const json = res.json as sinon.SinonStub;

      expect(status.calledWith(200)).to.be.true;
      expect(json.calledWith(motorcycleMockwithId)).to.be.true;
    });
  });

  describe('Delete a motrocycle', () => {
    it('With success', async () => {
      req.params = { id: 'valid' };
      await controller.delete(req, res);

      const status = res.status as sinon.SinonStub;
      const end = res.end as sinon.SinonStub;

      expect(status.calledWith(204)).to.be.true;
      expect(end.calledWith()).to.be.true;
    });
  });
});