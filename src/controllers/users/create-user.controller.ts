import type { FastifyRequest, FastifyReply } from "fastify";

async function create_user_controller(req: FastifyRequest, reply: FastifyReply) {
    const sum = (a: number, b: number) => a + b;
    return reply.status(201).send(`Controller funcionando ${sum(1, 2)}`)
}

export { create_user_controller }