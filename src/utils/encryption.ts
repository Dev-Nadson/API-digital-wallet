import { hash } from "bcryptjs"

async function hash_text(text: string) {
    return hash(text, 10)
}

export { hash_text }