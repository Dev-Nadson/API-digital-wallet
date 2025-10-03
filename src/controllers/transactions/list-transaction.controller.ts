import type { FastifyRequest, FastifyReply } from "fastify";
import { list_transaction_repositorie } from "../../repositories/transactions/list-transaction.repositore.js";

// req para paginação
async function list_transaction_controller(req: FastifyRequest, reply: FastifyReply) {
    const transactions = await list_transaction_repositorie()
    return reply.status(200).send(transactions)
}

export { list_transaction_controller }