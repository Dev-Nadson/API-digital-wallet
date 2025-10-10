import { config } from 'dotenv'

config()

const env = {
    BCRYPT_ROUNDS: Number(process.env.BCRYPT_ROUNDS) || 10,
    PORT: Number(process.env.PORT) || 3333,
    HOST: String(process.env.HOST)
}

export { env }