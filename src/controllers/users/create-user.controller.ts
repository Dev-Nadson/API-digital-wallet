import type { FastifyRequest, FastifyReply } from "fastify";
import type { Iuser } from "../../types/user.types.js";
import { create_user_repositorie } from "../../repositories/users/create-user.repositorie.js";
import { hash_text } from "../../utils/encryption.js";
import { user_schema } from "../../schemas/user.schema.js";

async function create_user_controller(
    req: FastifyRequest<{ Body: Iuser }>, //generics types
    reply: FastifyReply
) {

    const { name, email, password } = user_schema.parse(req.body)

    let hash_password: string
    try {
        hash_password = await hash_text(password)
    } catch (error) {
        console.error("Hash error:", error)
        return reply.status(500).send({
            error: "Internal server error",
            message: "Hash password error"
        })
    }

    const user = await create_user_repositorie({ name, email, "password": hash_password })

    if (user === "EMAIL_ALREADY_EXISTS") {
        return reply.status(409).send({
            message: "Conflict Error",
            data: user
        })
    }

    return reply.status(201).send({
        message: "User created with success",
        data: user
    })

}

export { create_user_controller }