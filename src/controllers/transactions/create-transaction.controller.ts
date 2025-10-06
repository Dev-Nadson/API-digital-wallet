import type { FastifyRequest, FastifyReply } from "fastify";
import { create_transaction_repositorie } from "../../repositories/transactions/create-transaction.repositorie.js";
import { transaction_params_schema, transaction_schema } from "../../schemas/transaction.schema.js";
import type { Itransaction, ItransactionParams } from "../../types/transaction.types.js";

async function create_transaction_controller(req: FastifyRequest<{ Body: Itransaction, Params: ItransactionParams }>, reply: FastifyReply) {
    const { receiver_id, amount } = transaction_schema.parse(req.body)
    const { sender_id } = transaction_params_schema.parse(req.params)
    const sender_id_number = Number(sender_id)

    if (sender_id_number === receiver_id) {
        return reply.status(400).send({
            message: "Bad Request",
            data: "CANNOT_TRANSFER_TO_YOURSELF"
        })
    }

    const transaction = await create_transaction_repositorie({ sender_id_number, receiver_id, amount })

    if (transaction === "SENDER_DONT_EXISTS") {
        return reply.status(404).send({
            message: "non-existent sender",
            data: transaction
        })
    }

    if (transaction === "RECEIVER_DONT_EXISTS") {
        return reply.status(404).send({
            message: "non-existent receiver",
            data: transaction
        })
    }

    if (transaction === "INSUFFICIENT_BALANCE") {
        return reply.status(400).send({
            message: "insufficient balance",
            data: transaction
        })
    }

    return reply.status(201).send({
        message: "Transaction completed successfully",
        data: transaction
    })
}

export { create_transaction_controller }