import type { FastifyRequest, FastifyReply } from "fastify";
import { create_transation_repositorie } from "../../repositories/transations/create-transation.repositorie.js";

async function create_user_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.status(201).send("Criado")
}

export { create_user_controller }