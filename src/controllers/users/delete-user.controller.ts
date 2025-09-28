import type { FastifyRequest, FastifyReply } from "fastify";
import type { IUpdateUserParams } from "../../types/user.types.js";
import { delete_user_repositorie } from "../../repositories/users/delete-user.repositorie.js";

async function delete_user_controller(req: FastifyRequest<{ Params: IUpdateUserParams }>, reply: FastifyReply) {
    const { id } = req.params
    await delete_user_repositorie(id)
    return reply.status(204).send()
}

export { delete_user_controller }