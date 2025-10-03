import type { FastifyRequest, FastifyReply } from "fastify";
import { create_transation_repositorie } from "../../repositories/transations/create-transation.repositorie.js";
import type { Itransation, ItransationParams } from "../../types/user.types.js";

async function create_transation_controller(req: FastifyRequest<{ Body: Itransation, Params: ItransationParams }>, reply: FastifyReply) {
    const { sender_id } = req.body
    const { receiver_id, amount } = req.params
    await create_transation_controller({ sender_id, receiver_id, amount })
    return reply.status(201).send("Transação concluída")
}
export { create_transation_controller } 