import z from 'zod';

export const RegisterSchema = z
  .object({
    fullname: z.string({ required_error: 'Fullname is required' }),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email' }),
    isAdmin: z.boolean().default(false),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6)
      .max(20),
    confirmPassword: z
      .string({ required_error: 'Confirm password is required' })
      .min(6)
      .max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password and Confirm password must be the same',
    path: ['confirmPassword'],
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
