import { IMotorcycle } from '../../interfaces/IMotorcycle';

export const motorcycleMock:IMotorcycle = {
  status: false,
  buyValue: 3000,
  category: "Trail",
  color: 'red',
  engineCapacity: 2400,
  model: 'Honda',
  year: 2001
}

export const motorcycleMockwithId:IMotorcycle & { _id: string } = {
  _id: '62cf1fc6498565d94eba55cd',
  status: false,
  buyValue: 3000,
  category: 'Trail',
  color: 'red',
  engineCapacity: 2400,
  model: 'Honda',
  year: 2001
}

export const allMotorsMock:(IMotorcycle & { _id: string })[] = [
  {
    _id: '62cf1fc6498565d94eba55cd',
    status: false,
    buyValue: 3000,
    category: 'Trail',
    color: 'red',
    engineCapacity: 2400,
    model: 'Honda',
    year: 2001
  }, {
    _id: '62cf1fc6498565d94jba55cd',
    status: true,
    buyValue: 2500,
    category: 'Custom',
    color: 'black',
    engineCapacity: 2000,
    model: 'Yamaha',
    year: 1995
  }
]
