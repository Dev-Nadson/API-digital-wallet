import { Knex } from "../../database/config.js";
import type { Iuser } from "../../types/user.types.js";

async function create_user_repositorie(user: Iuser) {
    const name = user.name
    const email = user.email
    await Knex("users").insert({ name, email })
}

export { create_user_repositorie }