import * as sinon from 'sinon';
import chai from 'chai';
import MotorcycleService from '../../../services/MotorcycleService';
import MotorcycleController from '../../../controllers/MotorcycleController';
import { Request, Response } from 'express';
import { allMotorsMock, motorcycleMockwithId } from '../../mocks/motorcycleMocks';

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
  })
});