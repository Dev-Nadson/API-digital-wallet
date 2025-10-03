import type { FastifyInstance } from "fastify"
import { create_transation_controller } from "../controllers/transations/create-transation.controller.js"
import { list_transation_controller } from "../controllers/transations/list-transation.controller.js"

async function transantions_routes(app: FastifyInstance) {
    app.post("/create/:id?amount=&receiver=", create_transation_controller)
    app.get("/list", list_transation_controller)
}

export { transantions_routes }