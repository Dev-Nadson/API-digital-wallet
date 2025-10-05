import { z } from 'zod'

const user_schema = z.object({
    name: z.string({ message: "O campo de nome é obrigatório" })
        .min(3, "Deve conter no mínimo 3 caracteres")
        .max(255, "Deve conter no máximo 255 caracteres")
        .trim(),

    email: z.email().toLowerCase()
        .trim(),

    password: z.string()
        .min(3, "Deve conter no mínimo 3 caracteres")
        .max(255, "Deve conter no máximo 255 caracteres")
        .trim(),

    balance: z.number()
        .positive("O saldo deve ser positivo")
        .optional()
})

const update_user_schema = z.object({
    id: z.string().trim()
})

export { user_schema, update_user_schema }