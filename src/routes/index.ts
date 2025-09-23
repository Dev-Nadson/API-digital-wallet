import type { FastifyInstance } from 'fastify';

import { user_routes } from './user.routes.js';

async function app_routes(app: FastifyInstance) {
    app.register(user_routes, { prefix: '/user' })
}

export { app_routes }