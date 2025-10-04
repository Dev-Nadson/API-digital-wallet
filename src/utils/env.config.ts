import { config } from 'dotenv'

config()

const env = {
    BCRYPT_ROUNDS: Number(process.env.BCRYPT_ROUNDS) || 10,
}

export { env }