import { Knex } from "../../database/config.js";
import type { Itransation, ItransationParams } from "../../types/user.types.js";

async function create_transation_repositorie(transation: Itransation & ItransationParams) {
    const { sender_id, receiver_id, amount } = transation
    await Knex("users-transations").insert({ sender_id, receiver_id, amount })
}

export { create_transation_repositorie }