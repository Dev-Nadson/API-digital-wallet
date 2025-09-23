import type { FastifyInstance } from "fastify"
import { create_user_controller } from "../controllers/users/create-user.controller.js"

async function user_routes(app: FastifyInstance) {
    app.get("/", create_user_controller)
}

export { user_routes }