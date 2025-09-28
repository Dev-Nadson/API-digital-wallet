import { Knex } from "../../database/config.js";
import type { Iuser } from "../../types/user.types.js";

async function create_user_repositorie(user: Iuser) {
    const { name, email, password } = user
    await Knex("users").insert({ name, email, password })
}

export { create_user_repositorie }