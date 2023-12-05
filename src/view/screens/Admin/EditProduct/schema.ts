import { z } from 'zod';

export const EditProductSchema = z.object({
  productId: z.string(),
  name: z.string({ required_error: 'Name is required' }),
  description: z.string({ required_error: 'Description is required' }),
  price: z.string(),
  weight: z.string(),
  image: z.string(),
  active: z.boolean().default(true),
});

export type EditProductType = z.infer<typeof EditProductSchema>;
