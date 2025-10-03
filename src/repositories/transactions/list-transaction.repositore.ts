import { Knex } from "../../database/config.js";

async function list_transaction_repositorie() {
    return await Knex("users-transations").select().orderBy("id", "desc")
}

export { list_transaction_repositorie }