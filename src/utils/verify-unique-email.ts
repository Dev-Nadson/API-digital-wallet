import { Knex } from "../database/config.js";

async function verify_unique_email(email: string, excludeUserId?: number) {
    let query = Knex("users").select("id", "email").where({ email });

    if (excludeUserId !== undefined) {
        query = query.whereNot({ id: excludeUserId });
    }

    const exists_email = await query.first();
    return exists_email || null;
}

export { verify_unique_email }