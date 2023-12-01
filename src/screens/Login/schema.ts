import z from 'zod';

export const LoginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email' }),
  password: z.string({ required_error: 'Password is required' }).min(6).max(20),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
