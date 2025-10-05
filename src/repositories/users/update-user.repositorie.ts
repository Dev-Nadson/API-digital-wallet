import { Knex } from "../../database/config.js";
import type { Iuser, IUpdateUserParams } from "../../types/user.types.js";

async function update_user_repositorie(user: Iuser, req_id: IUpdateUserParams) {
    const { name, email, password } = user
    const { id } = req_id

    const exist_user = await Knex("users").select().where({ "id": id })

    if (!exist_user) {
        return "USER_DONT_EXISTS"
    }

    //Adicionar validação de email já existente

    await Knex("users").update({ name, email, password }).where({ "id": id })
    return await Knex("users").select().where({ "id": id })
}

export { update_user_repositorie }