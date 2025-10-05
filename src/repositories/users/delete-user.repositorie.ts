import { Knex } from "../../database/config.js";

async function delete_user_repositorie(id: number) {

    const user = await Knex("users").select().where({ "id": id }).first()
    if (!user) {
        return "USER_DONT_EXISTS"
    }
    await Knex("users").delete().where({ "id": id })
}

export { delete_user_repositorie }