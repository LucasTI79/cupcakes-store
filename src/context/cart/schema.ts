import { z } from 'zod';

export const CartSchema = z.object({
  items: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number().positive(),
    }),
  ),
});

export type CartSchemaType = z.infer<typeof CartSchema>;
