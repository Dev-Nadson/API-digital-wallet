import type { FastifyRequest, FastifyReply } from "fastify";
import type { Iuser } from "../../types/user.types.js";
import { create_user_repositorie } from "../../repositories/users/create-user.repositorie.js";

async function create_user_controller(
    req: FastifyRequest<{ Body: Iuser }>, //generics types
    reply: FastifyReply
) {
    const { name, email, password } = req.body
    await create_user_repositorie({ "name": name, "email": email, "password": password })
    return reply.status(201).send("Usuário criado!")
}

export { create_user_controller }