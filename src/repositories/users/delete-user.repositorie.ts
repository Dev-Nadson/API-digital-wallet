import { Knex } from "../../database/config.js";
import { verify_user_exists } from "../../utils/verify-user-exists.js";

async function delete_user_repositorie(id: number) {

    const user = await verify_user_exists(id)
    if (!user) {
        return "USER_DONT_EXISTS"
    }
    await Knex("users").delete().where({ "id": id })
}

export { delete_user_repositorie }