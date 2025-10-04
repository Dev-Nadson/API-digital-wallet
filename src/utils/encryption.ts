import { hash } from "bcryptjs"
import { env } from "./env.config.js"

async function hash_text(text: string) {
    return hash(text, env.BCRYPT_ROUNDS)
}

export { hash_text }