import type { FastifyRequest, FastifyReply } from "fastify";
import type { Iuser, IUpdateUserParams } from "../../types/user.types.js";
import { update_user_repositorie } from "../../repositories/users/update-user.repositorie.js";
import { hash_text } from "../../utils/encryption.js";
import { user_schema, update_user_schema } from "../../schemas/user.schema.js";

async function update_user_controller(
    req: FastifyRequest<{ Body: Iuser, Params: IUpdateUserParams }>,
    reply: FastifyReply
) {

    const { name, email, password } = user_schema.parse(req.body)
    const { id } = update_user_schema.parse(req.params)
    const number_id = Number(id)

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

    const user = await update_user_repositorie({ "name": name, "email": email, "password": hash_password }, { "id": number_id })

    if (user === "USER_DONT_EXISTS") {
        return reply.status(404).send({
            message: "non-existent user",
            data: user
        })
    }

    if (user === "EMAIL_ALREADY_EXISTS") {
        return reply.status(409).send({
            message: "Conflict Error",
            data: user
        })
    }

    return reply.status(201).send({
        message: "User updated with success",
        data: user
    })
}

export { update_user_controller }