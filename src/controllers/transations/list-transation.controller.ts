import type { FastifyRequest, FastifyReply } from "fastify";
import { list_transation_repositorie } from "../../repositories/transations/list-transation.repositore.js";

// req para paginação
async function list_transation_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send("listado")
}

export { list_transation_controller }