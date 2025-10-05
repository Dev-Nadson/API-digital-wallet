import { Knex } from "../../database/config.js";
import type { Iuser } from "../../types/user.types.js";
import { verify_unique_email } from "../../utils/verify-unique-email.js";

async function create_user_repositorie(user: Iuser) {
    try {
        const { name, email, password } = user

        const exists_email = await verify_unique_email(email);

        if (exists_email) {
            return "EMAIL_ALREADY_EXISTS"
        }

        await Knex("users").insert({ name, email, password })
        return await Knex("users").select("").where({ email })
    } catch (error) {

    }

}

export { create_user_repositorie }