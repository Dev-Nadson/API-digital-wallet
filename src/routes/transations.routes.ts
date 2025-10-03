import type { FastifyInstance } from "fastify"
import { create_transation_controller } from "../controllers/transations/create-transation.controller.js"
import { list_transation_controller } from "../controllers/transations/list-transation.controller.js"
import { list_user_transation_controller } from "../controllers/transations/list-user-transation.controller.js"

async function transations_routes(app: FastifyInstance) {
    app.post("/:sender_id/create", create_transation_controller)
    app.get("/list", list_transation_controller)
    app.get("/:sender_id/list", list_user_transation_controller)
}

export { transations_routes }