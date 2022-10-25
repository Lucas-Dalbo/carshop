import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const MotorcycleZodshema = VehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number({
    required_error: 'Engine Capacity is required',
    invalid_type_error: 'Engine Capacity must be a number',
  }).int('Engine Capacity must be an integer')
    .min(1, 'Engine Capacity must be greater then 0')
    .max(2500, 'Engine Capacity must be 2500 or less'),
});

export type IMotorcycle = z.infer<typeof MotorcycleZodshema>;