import type { FastifyRequest, FastifyReply } from "fastify";

async function list_user_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send(() => console.log("Listed"))
}

export { list_user_controller }