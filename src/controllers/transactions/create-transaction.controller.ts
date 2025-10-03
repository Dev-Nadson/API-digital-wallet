import type { FastifyRequest, FastifyReply } from "fastify";
import { create_transaction_repositorie } from "../../repositories/transactions/create-transaction.repositorie.js";
import type { Itransaction, ItransactionParams } from "../../types/user.types.js";

async function create_transaction_controller(req: FastifyRequest<{ Body: Itransaction, Params: ItransactionParams }>, reply: FastifyReply) {
    const { receiver_id, amount } = req.body
    const { sender_id } = req.params
    const sender_id_number = Number(sender_id)

    await create_transaction_repositorie({ sender_id_number, receiver_id, amount })
    return reply.status(201).send("Transação concluída")
}
export { create_transaction_controller } 