import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("users", (table) => {
        table.increments("id").primary()
        table.string("name").notNullable()
        table.string("email").notNullable().unique()
        table.decimal("balance", 10, 2).notNullable().defaultTo(100)
        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now())
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("users")
}