import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number({
    invalid_type_error: 'Doors Qty must be a number',
  })
    .int({
      message: 'Doors Qty must be an integer',
    })
    .positive({
      message: 'Doors Qty must have a positive value',
    })
    .min(2, {
      message: 'Doors Qty must be 2 or more',
    })
    .max(4, {
      message: 'Doors Qty must be 4 or less', 
    }),

  seatsQty: z.number({
    invalid_type_error: 'Seats Qty must be a number',
  })
    .int({
      message: 'Seats Qty must be an integer',
    })
    .min(2, {
      message: 'Seats Qty must be 2 or more',
    })
    .max(7, {
      message: 'Seats Qty must be 7 or less', 
    }),
});

export type ICar = z.infer<typeof CarZodSchema>;
