import { Knex } from "../../database/config.js";
import type { Itransaction } from "../../types/transaction.types.js";
import { verify_user_exists } from "../../utils/verify-user-exists.js";

// Se sender.balance < amount, retornar erro "INSUFFICIENT_BALANCE"

async function create_transaction_repositorie(transaction: Itransaction) {
    const { sender_id_number, receiver_id, amount } = transaction

    const exist_sender = await verify_user_exists(sender_id_number)
    if (!exist_sender) {
        return "SENDER_DONT_EXISTS"
    }

    const exist_receiver = await verify_user_exists(receiver_id)
    if (!exist_receiver) {
        return "RECEIVER_DONT_EXISTS"
    }

    const balance = await Knex("users").select("balance").where({ "id": sender_id_number }).first()
    if (balance.balance < amount) {
        return "INSUFFICIENT_BALANCE"
    }

    await Knex.transaction(async (trx) => {
        await trx("users").where({ "id": receiver_id }).increment("balance", amount)
        await trx("users").where({ "id": sender_id_number }).decrement("balance", amount)

        await trx("users-transations").insert({ "sender_id": sender_id_number, receiver_id, amount })
    })

    return Knex("users-transations").select().first().orderBy("id", "desc")
}

export { create_transaction_repositorie }