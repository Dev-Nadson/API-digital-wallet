import type { FastifyRequest, FastifyReply } from "fastify";
import { list_user_transaction_repositorie } from "../../repositories/transactions/list-user-transaction.repositorie.js";
import type { ItransactionParams } from "../../types/user.types.js";
// req para paginação
async function list_user_transaction_controller(req: FastifyRequest<{ Params: ItransactionParams }>, reply: FastifyReply) {
    const { sender_id } = req.params
    const transactions = await list_user_transaction_repositorie({ sender_id })
    return reply.status(200).send(transactions)
}

export { list_user_transaction_controller }