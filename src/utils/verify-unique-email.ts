import { Knex } from "../database/config.js";

async function verify_unique_email(email: string) {
    const exists_email = await Knex("users").select("email").where({ "email": email }).first()
    return exists_email || null
}

export { verify_unique_email }