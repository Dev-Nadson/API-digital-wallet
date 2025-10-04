import type { FastifyRequest, FastifyReply } from "fastify";
import type { Iuser, IUpdateUserParams } from "../../types/user.types.js";
import { update_user_repositorie } from "../../repositories/users/update-user.repositorie.js";
import { hash_text } from "../../utils/encryption.js";

async function update_user_controller(
    req: FastifyRequest<{ Body: Iuser, Params: IUpdateUserParams }>,
    reply: FastifyReply
) {
    const { name, email, password } = req.body
    const { id } = req.params
    const hash_password = await hash_text(password)
    await update_user_repositorie({ "name": name, "email": email, "password": hash_password }, id)

    return reply.status(200).send("Usuário atualizado")
}

export { update_user_controller }