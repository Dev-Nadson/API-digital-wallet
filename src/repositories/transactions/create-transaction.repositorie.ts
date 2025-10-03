import { Knex } from "../../database/config.js";
import type { Itransaction } from "../../types/user.types.js";

async function create_transaction_repositorie(transaction: Itransaction) {
    const { sender_id_number, receiver_id, amount } = transaction

    await Knex.transaction(async (trx) => {
        await trx("users").where({ "id": receiver_id }).increment("balance", amount)
        await trx("users").where({ "id": sender_id_number }).decrement("balance", amount)

        await trx("users-transations").insert({ "sender_id": sender_id_number, receiver_id, amount })
    })
}

export { create_transaction_repositorie }