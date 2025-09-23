import type { FastifyInstance } from 'fastify';

import { user_routes } from './user.routes.js';

async function app_routes(app: FastifyInstance) {
    app.register(user_routes)
}

export { app_routes }