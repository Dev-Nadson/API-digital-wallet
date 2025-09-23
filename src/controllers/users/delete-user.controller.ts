import type { FastifyRequest, FastifyReply } from "fastify";

async function delete_user_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send(() => console.log("Deleted"))
}

export { delete_user_controller }