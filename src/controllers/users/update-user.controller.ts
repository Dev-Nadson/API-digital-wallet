import type { FastifyRequest, FastifyReply } from "fastify";
import type { Iuser, IUpdateUserParams } from "../../types/user.types.js";
import { update_user_repositorie } from "../../repositories/users/update-user.repositorie.js";

async function update_user_controller(
    req: FastifyRequest<{ Body: Iuser, Params: IUpdateUserParams }>,
    reply: FastifyReply
) {
    const { name, email } = req.body
    const { id } = req.params
    await update_user_repositorie({ "name": name, "email": email }, id)

    return reply.status(200).send("Usuário atualizado")
}

export { update_user_controller }