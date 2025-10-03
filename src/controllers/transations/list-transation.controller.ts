import type { FastifyRequest, FastifyReply } from "fastify";
import { list_transation_repositorie } from "../../repositories/transations/list-transation.repositore.js";

// req para paginação
async function list_transation_controller(req: FastifyRequest, reply: FastifyReply) {
    const transations = await list_transation_repositorie()
    return reply.status(200).send(transations)
}

export { list_transation_controller }