import { z } from 'zod';

export const CreateOrderSchema = z.object({
  buyerId: z.string(),
  sellerId: z.string(),
  total: z.number(),
  status: z
    .enum(['pending', 'completed', 'canceled', 'delivered'])
    .default('pending'),
  paymentMethod: z
    .enum(['credit-card', 'debit', 'pix', 'cash'])
    .default('cash'),
  products: z.array(
    z.object({
      product: z.object({
        id: z.string(),
        productRecordId: z.string(),
        userId: z.string(),
        price: z.number(),
      }),
      quantity: z.number(),
    }),
  ),
});

export type CreateOrderType = z.infer<typeof CreateOrderSchema>;
