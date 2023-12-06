import z from 'zod';

export const LoginSchema = z.object({
  email: z
    .string({ required_error: 'Email é obrigatório' })
    .email({ message: 'Email inválido' }),
  password: z
    .string({ required_error: 'Senha é obrigatória' })
    .min(6, { message: 'Mínimo de 6 caracteres' })
    .max(20, { message: 'Máximo de 20 caracteres' }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
