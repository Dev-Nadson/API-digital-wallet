import { Knex } from "../../database/config.js";

async function list_user_repositorie() {
    return await Knex("users").select().orderBy("id", "desc")
}

export { list_user_repositorie }