import { z } from 'zod';

export const CreateProductSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  description: z.string({ required_error: 'Description is required' }),
  price: z.string(),
  weight: z.number({ required_error: 'Weigth is required' }),
  image: z.string(),
  active: z.boolean().default(false),
});

export type CreateProductType = z.infer<typeof CreateProductSchema>;
