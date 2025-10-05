import { Knex } from "../database/config.js";

async function verify_user_exists(id: number) {
    const exist_user = await Knex("users").select().where({ "id": id }).first()
    return exist_user || null
}

export { verify_user_exists }