import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable("users", (table) => {
        table.string("password", 255).notNullable().after("email") //limite de 255 caracteres
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable("users", (table) => {
        table.dropColumn("password")
    })
}

