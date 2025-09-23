import fastify from "fastify"
import { app_routes } from "./routes/index.js"

const PORT = 3333
const app = fastify()

app.register(app_routes)

try {
    app.listen({ "port": PORT }, () => {
        console.log(`Server running on port ${PORT}`)
    })
} catch (err) {
    console.log("An error occurred", err)
}
