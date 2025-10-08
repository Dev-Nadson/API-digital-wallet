import { Knex } from "../../database/config.js";
import type { ItransactionParams } from "../../types/transaction.types.js";

async function list_user_transaction_repositorie(transaction: ItransactionParams) {
    const { sender_id } = transaction
    return await Knex("users-transations").select().where({ sender_id }).orderBy("id", "desc")
}

export { list_user_transaction_repositorie }