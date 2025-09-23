import type { FastifyRequest, FastifyReply } from "fastify";

async function update_user_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send(() => console.log("Updated"))
}

export { update_user_controller }