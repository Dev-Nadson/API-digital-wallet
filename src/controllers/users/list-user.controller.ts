import type { FastifyRequest, FastifyReply } from "fastify";
import { list_user_repositorie } from "../../repositories/users/list-user.repositorie.js";

//mantive o req para futura paginação
async function list_user_controller(req: FastifyRequest, reply: FastifyReply) {
    const users = await list_user_repositorie()
    return reply.status(200).send(users)
}

export { list_user_controller }