import type { FastifyRequest, FastifyReply } from "fastify";
import { create_transation_repositorie } from "../../repositories/transations/create-transation.repositorie.js";
import type { Itransation, ItransationParams } from "../../types/user.types.js";

async function create_transation_controller(req: FastifyRequest<{ Body: Itransation, Params: ItransationParams }>, reply: FastifyReply) {
    const { receiver_id, amount } = req.body
    const { sender_id, } = req.params
    const sender_id_number = Number(sender_id)
    console.log(sender_id)

    await create_transation_repositorie({ sender_id_number, receiver_id, amount })
    return reply.status(201).send("Transação concluída")
}
export { create_transation_controller } 