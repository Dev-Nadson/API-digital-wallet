import type { FastifyInstance } from "fastify"
import { create_transaction_controller } from "../controllers/transactions/create-transaction.controller.js"
import { list_transaction_controller } from "../controllers/transactions/list-transaction.controller.js"
import { list_user_transaction_controller } from "../controllers/transactions/list-user-transaction.controller.js"

async function transactions_routes(app: FastifyInstance) {
    app.post("/:sender_id/create", create_transaction_controller)
    app.get("/list", list_transaction_controller)
    app.get("/:sender_id/list", list_user_transaction_controller)
}

export { transactions_routes }