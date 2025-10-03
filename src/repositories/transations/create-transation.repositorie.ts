import { Knex } from "../../database/config.js";
import type { Itransation } from "../../types/user.types.js";

async function create_transation_repositorie(transation: Itransation) {
    const { sender_id, receiver_id, amount } = transation
    const receiver_balance = await Knex("users").select("balance").where({ "id": sender_id }).first()
    const new_balance = receiver_balance.balance + amount
    await Knex("users").update({ "balance": new_balance }).where({ "id": receiver_id })
    console.log(receiver_balance)
    console.log(amount)

    await Knex("users-transations").insert({ sender_id, receiver_id, amount })
}

export { create_transation_repositorie }