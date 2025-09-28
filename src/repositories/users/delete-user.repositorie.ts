import { Knex } from "../../database/config.js";

async function delete_user_repositorie(id: number) {
    await Knex("users").delete().where({ "id": id })
}

export { delete_user_repositorie }