import { z } from "zod";

const transaction_schema = z.object({
    receiver_id: z.number().positive(),
    amount: z.number().positive({ message: "O valor para transação deve ser positivo" })
})

const transaction_params_schema = z.object({
    sender_id: z.string()
})

export { transaction_schema, transaction_params_schema }