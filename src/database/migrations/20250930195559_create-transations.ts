import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("users-transations", (table) => {
        table.increments("id").primary()
        table.integer("sender_id").references("id").inTable("users").notNullable()
        table.integer("receiver_id").references("id").inTable("users").notNullable()
        table.decimal("amount", 10, 2).notNullable()
        table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("users-transations")
}

