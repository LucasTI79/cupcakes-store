import { z } from 'zod';

export const CreateProductSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  description: z.string({ required_error: 'Description is required' }),
  price: z.string(),
  weight: z.string(),
  image: z.string(),
  active: z.boolean().default(true),
});

export type CreateProductType = z.infer<typeof CreateProductSchema>;
