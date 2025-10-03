import { Knex } from "../../database/config.js";
import type { ItransationParams } from "../../types/user.types.js";

async function list_user_transation_repositorie(transaction: ItransationParams) {
    const { sender_id } = transaction
    return await Knex("users-transations").select().where({ sender_id }).orderBy("id", "desc")
}

export { list_user_transation_repositorie }