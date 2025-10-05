import { Knex } from "../../database/config.js";
import { verify_unique_email } from "../../utils/verify-unique-email.js";
import type { Iuser, IUpdateUserParams } from "../../types/user.types.js";
import { verify_user_exists } from "../../utils/verify-user-exists.js";

async function update_user_repositorie(user: Iuser, req_id: IUpdateUserParams) {
    const { name, email, password } = user
    const { id } = req_id

    const exist_user = await verify_user_exists(id)

    if (!exist_user) {
        return "USER_DONT_EXISTS"
    }

    const exists_email = await verify_unique_email(email, id)

    if (exists_email) {
        return "EMAIL_ALREADY_EXISTS"
    }

    await Knex("users").update({ name, email, password }).where({ "id": id })
    return await Knex("users").select().where({ "id": id })
}

export { update_user_repositorie }