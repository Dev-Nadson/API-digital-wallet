import { Knex } from "../../database/config.js";

async function list_transation_repositorie() {
    return await Knex("users-transations").select().orderBy("id", "desc")
}

export { list_transation_repositorie }