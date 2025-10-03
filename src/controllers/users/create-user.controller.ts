import type { FastifyRequest, FastifyReply } from "fastify";
import type { Iuser } from "../../types/user.types.js";
import { create_user_repositorie } from "../../repositories/users/create-user.repositorie.js";
import { hash_text } from "../../utils/encryption.js";

import { z } from 'zod'

const user_schema = z.object({
    name: z.string(),
    //    email: z.string().email(),
    password: z.string(),
    balance: z.number().optional()
})

async function create_user_controller(
    req: FastifyRequest<{ Body: Iuser }>, //generics types
    reply: FastifyReply
) {
    const { name, email, password } = req.body
    const hash_password = await hash_text(password)
    const data = await create_user_repositorie({ "name": name, "email": email, "password": hash_password })
    return reply.status(201).send(data)
}

export { create_user_controller }