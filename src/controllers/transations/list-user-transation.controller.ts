import type { FastifyRequest, FastifyReply } from "fastify";
import { list_user_transation_repositorie } from "../../repositories/transations/list-user-transation.repositorie.js";
import type { ItransationParams } from "../../types/user.types.js";
// req para paginação
async function list_user_transation_controller(req: FastifyRequest<{ Params: ItransationParams }>, reply: FastifyReply) {
    const { sender_id } = req.params
    const transations = await list_user_transation_repositorie({ sender_id })
    return reply.status(200).send(transations)
}

export { list_user_transation_controller }