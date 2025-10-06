import fastify from "fastify"
import { app_routes } from "./routes/index.js"
import { error_handler_middleware } from "./middlewares/error-handler-middleware.js"
import { env } from "./utils/env.config.js"

const PORT = env.PORT
const app = fastify()

app.register(app_routes)

app.setErrorHandler(error_handler_middleware)

await app.listen({ "port": PORT }, () => {
    console.log(`Server running on port ${PORT}`)
})

