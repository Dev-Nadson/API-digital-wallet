import { Knex } from "../../database/config.js";
import type { Itransation } from "../../types/user.types.js";

async function create_transation_repositorie(transation: Itransation) {
    console.log(transation)
    const { sender_id_number, receiver_id, amount } = transation

    await Knex.transaction(async (trx) => {
        await trx("users").where({ "id": receiver_id }).increment("balance", amount)
        await trx("users").where({ "id": sender_id_number }).decrement("balance", amount)

        await trx("users-transations").insert({ "sender_id": sender_id_number, receiver_id, amount })
    })
}

export { create_transation_repositorie }