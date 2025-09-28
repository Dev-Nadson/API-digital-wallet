import { Knex } from "../../database/config.js";
import type { Iuser } from "../../types/user.types.js";

async function update_user_repositorie(user: Iuser, id: number) {
    const { name, email, password } = user
    await Knex("users").update({ name, email, password }).where({ "id": id })
}

export { update_user_repositorie }