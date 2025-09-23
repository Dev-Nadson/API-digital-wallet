import type { FastifyInstance } from "fastify"
import { create_user_controller } from "../controllers/users/create-user.controller.js"
import { list_user_controller } from "../controllers/users/list-user.controller.js"
import { update_user_controller } from "../controllers/users/update-user.controller.js"
import { delete_user_controller } from "../controllers/users/delete-user.controller.js"

async function user_routes(app: FastifyInstance) {
    app.post("/create", create_user_controller)
    app.get("/list", list_user_controller)
    app.put("/update", update_user_controller)
    app.delete("/delete", delete_user_controller)
}

export { user_routes }