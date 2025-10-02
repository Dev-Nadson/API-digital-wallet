import type { Knex } from "knex";
import { hash_text } from "../../utils/encryption.js";

export async function seed(knex: Knex): Promise<void> {
    await knex("users").del()

    await knex("users").insert([
        {
            name: "nadson1",
            email: "insert@Inter.com",
            password: await hash_text("12345"),
        },
        {
            name: "nadson2",
            email: "insert2@Inter.com",
            password: await hash_text("312345"),
        }, {
            name: "nadson3",
            email: "insert3@Inter.com",
            password: await hash_text("12345"),
        }, {
            name: "nadson4",
            email: "insert4@Inter.com",
            password: await hash_text("12345"),
        }, {
            name: "nadson5",
            email: "insert5@Inter.com",
            password: await hash_text("12345"),
        }, {
            name: "nadson6",
            email: "insert6@Inter.com",
            password: await hash_text("12345"),
        }, {
            name: "nadson7",
            email: "insert7@Inter.com",
            password: await hash_text("12345"),
        }, {
            name: "nadson8",
            email: "insert8@Inter.com",
            password: await hash_text("12345"),
        }, {
            name: "nadson9",
            email: "insert9@Inter.com",
            password: await hash_text("12345"),
        },
    ]);
};
