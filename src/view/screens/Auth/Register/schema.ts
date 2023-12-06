import z from 'zod';

export const RegisterSchema = z
  .object({
    fullname: z.string({ required_error: 'Nome é obrigatório' }),
    phone: z.string({ required_error: 'Celular é obrigatório' }),
    email: z
      .string({ required_error: 'Email é obrigatório' })
      .email({ message: 'Email inválido' }),
    isAdmin: z.boolean().default(false),
    password: z
      .string({ required_error: 'Senha é obrigatória' })
      .min(6, { message: 'Mínimo de 6 caracteres' })
      .max(20, { message: 'Máximo de 20 caracteres' }),
    confirmPassword: z
      .string({ required_error: 'Confirmação de senha é obrigatória' })
      .min(6, { message: 'Mínimo de 6 caracteres' })
      .max(20, { message: 'Máximo de 20 caracteres' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
